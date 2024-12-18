import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation_Bar from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { useState } from "react";

import PostListProvider from "../store/postlistProvider";
import { Outlet } from "react-router-dom";
import PostList from "../components/postList";
import CreatePost from "../components/createpost";

function App() {
  // //this   state is defined to display either home section or create post section which is passed to sidebar as props
  const [selectItem, setactive] = useState("Home");
  //this is a method that receives the value returned from sidebar and updates that value to *setactive*
  const activeSidebarItem = (activeItem) => {
    setactive(activeItem);
  };
  return (
    <>
      <PostListProvider>
        <Navigation_Bar />
        <div className="contents">
          <Sidebar
            activeSidebarItem={activeSidebarItem}
            selectItem={selectItem}
          ></Sidebar>
          <div>
            {/* {selectItem === "Home" ? <PostList /> : <CreatePost />} */}

            <div>
              <Outlet />
              <Footer></Footer>
            </div>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
