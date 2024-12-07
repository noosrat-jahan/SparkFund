import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddNewCampaign from "../Components/AddNewCampaign";
import MyCampaign from "../Components/MyCampaign";
import MyDonation from "../Components/MyDonation";
import AllCampaign from "../Components/AllCampaign";
import '../App.css'
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import UpdateCampaign from "../Components/UpdateCampaign";
import DonationDetails from "../Components/DonationDetails";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('https://crowd-funding-application-server.vercel.app/myCampaigns/')
            },
            {
                path: "/allcampaign",
                element: <AllCampaign></AllCampaign>,
                loader: ()=>fetch('https://crowd-funding-application-server.vercel.app/myCampaigns/')
            },
            {
                path: "/donationDetails/:id",
                element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
                loader: ({params})=>fetch(`https://crowd-funding-application-server.vercel.app/myCampaigns/${params.id}`)
            },
            {
                path: "/addcampaign",
                element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
            },
            {
                path: "updateCampaign/:id",
                element: <UpdateCampaign></UpdateCampaign>,
                loader: ({params})=>fetch(`https://crowd-funding-application-server.vercel.app/myCampaigns/${params.id}`)
            },
            {
                path: "/mycampaign",
                element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
                loader: ()=>fetch('https://crowd-funding-application-server.vercel.app/myCampaigns/')
            },
            {
                path: "/mydonation",
                element: <PrivateRoute><MyDonation></MyDonation></PrivateRoute>,
                loader: ()=>fetch('https://crowd-funding-application-server.vercel.app/myDonation/')
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }

])

export default Router;