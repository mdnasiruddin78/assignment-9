import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../components/Error";
import Home from "../components/Home";
import Updataprofile from "../components/Updataprofile";
import Userprofile from "../components/Userprofile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Adventuredetail from "../Pages/Adventuredetail";
import PrivateRoute from "./PrivateRoute";
import Forgot from "../Pages/Forgot";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/updateProfile",
          element: <Updataprofile></Updataprofile>,
        },
        {
          path: "/UserProfile",
          element: <PrivateRoute><Userprofile></Userprofile></PrivateRoute>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/adventureDetail/:ID",
          element: <PrivateRoute><Adventuredetail></Adventuredetail></PrivateRoute>,
          loader: () => fetch(`/winter.json`),
        },
        {
          path: "/forgotpassword",
          element: <Forgot></Forgot>,
        }
      ],
    },
  ]);


export default router;