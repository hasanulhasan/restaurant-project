import { createBrowserRouter, Navigate } from "react-router-dom";
import About from "../Components/Body/About";
import Body from "../Components/Body/Body";
import Contact from "../Components/Body/Contact";
import Home from "../Components/Body/Home";
import Menu from "../Components/Body/Menu";
import MainComponent from "../Components/MainComponent";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainComponent></MainComponent>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }

])
export default router;