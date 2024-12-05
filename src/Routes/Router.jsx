import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AddNewCampaign from "../Components/AddNewCampaign";
import MyCampaign from "../Components/MyCampaign";
import MyDonation from "../Components/MyDonation";
import AllCampaign from "../Components/AllCampaign";
import '../App.css'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
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
                element: <MyCampaign></MyCampaign>
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
            }
        ]
    }
])

export default Router;