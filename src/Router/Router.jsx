import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import AllJobs from "../pages/AllJobs/AllJobs";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../components/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../components/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/signIn',
        element:<SignIn/>
      },
      {
        path:'allJobs',
        element:<AllJobs/>
      },
      {
        path:'/jobs/:id',
        element:<PrivateRoute><JobDetails/></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRoute><JobApply/></PrivateRoute>
      },
      {
        path:'/myApplication',
        element:<PrivateRoute><MyApplications/></PrivateRoute>
      },
      {
        path:'/addJob',
        element:<PrivateRoute><AddJob/></PrivateRoute>
      }
    ],
  },
]);
