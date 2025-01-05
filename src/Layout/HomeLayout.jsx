import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import '../App.css'

const HomeLayout = () => {

    const navigation = useNavigation()

    return (
        <div className='font-inter dark:bg-[#1d232a] dark:text-white'>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ?
                    <span className=" loading loading-spinner text-sky-700 mt-10 w-20"></span>
                    : <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;