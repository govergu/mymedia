import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation_Bar from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import PostList from "../components/postList";
import CreatePost from "../components/createpost";
import { useState } from "react";
<<<<<<< HEAD:src/routes/App.jsx
import PostListProvider from "../store/postlistProvider";
=======
import PostListProvider from "./store/postlistProvider";
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151:src/App.jsx
import { Outlet } from "react-router-dom";

function App() {
  // //this   state is defined to display either home section or create post section which is passed to sidebar as props
  // const [selectItem, setactive] = useState("Home");
  // //this is a method that receives the value returned from sidebar and updates that value to *setactive*
  // const activeSidebarItem = (activeItem) => {
  //   setactive(activeItem);
  // };
  return (
    <>
      <PostListProvider>
        <Navigation_Bar />
        <div classNameName="contents">
<<<<<<< HEAD:src/routes/App.jsx
          <Sidebar
            activeSidebarItem={activeSidebarItem}
            selectItem={selectItem}
          ></Sidebar>
          <div>
            {/* {selectItem === "Home" ? <PostList /> : <CreatePost />} */}
=======
          <Sidebar></Sidebar>
          <div>
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151:src/App.jsx
            <Outlet />
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
