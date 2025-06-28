import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // use "react-router-dom" not "react-router"
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home";
import Projects from "../components/Projects";
import ProjectDetails from "../components/ProjectDetails";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
    ]
  },
  { path: "projects", Component: Projects },
      { path: "project/:id", Component: ProjectDetails },
      {path: "*", Component: ErrorPage}
]);

export default router;
