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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allcampaign",
                element: <AllCampaign></AllCampaign>
            },
            {
                path: "addcampaign",
                element: <AddNewCampaign></AddNewCampaign>
            },
            {
                path: "mycampaign",
                element: <MyCampaign></MyCampaign>,
                loader: ()=>fetch('http://localhost:5000/myCampaigns/')
            },
            {
                path: "mydonation",
                element: <MyDonation></MyDonation>
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