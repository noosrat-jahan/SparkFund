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
import UpdateProfile from "../Components/UpdateProfile";
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import Support from "../Components/Support";

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
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/support",
                element: <Support></Support>
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
                element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
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
            {
                path: "/updateprofile",
                element: <UpdateProfile></UpdateProfile>
            },
            
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }

])

export default Router;