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

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/myCampaigns/')
            },
            {
                path: "allcampaign",
                element: <AllCampaign></AllCampaign>,
                loader: ()=>fetch('http://localhost:5000/myCampaigns/')
            },
            {
                path: "donationDetails/:id",
                element: <DonationDetails></DonationDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/myCampaigns/${params.id}`)
            },
            {
                path: "addcampaign",
                element: <AddNewCampaign></AddNewCampaign>
            },
            {
                path: "updateCampaign/:id",
                element: <UpdateCampaign></UpdateCampaign>,
                loader: ({params})=>fetch(`http://localhost:5000/myCampaigns/${params.id}`)
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