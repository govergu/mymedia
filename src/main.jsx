import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
=======
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
import PostList from "./components/postList.jsx";
import CreatePost from "./components/createpost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
<<<<<<< HEAD
      {
        path: "/",
        element: <PostList />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
=======
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
>>>>>>> 22bb3d41e230547d994785beb5754acab5d89151
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
