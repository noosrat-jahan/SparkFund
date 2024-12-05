import React from 'react';
import logo from "../assets/crowd-logo.png"
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const links = <>
        <li><NavLink to="/" className='bg-base-200 px-3 py-2 rounded-md '>Home</NavLink></li>
        <li><NavLink to="/allcampaign" className='bg-base-200 px-3 py-2 rounded-md '>All Campaign</NavLink></li>
        <li><NavLink to="/addcampaign" className='bg-base-200 px-3 py-2 rounded-md '>Add New Campaign</NavLink></li>
        <li><NavLink to="/mycampaign" className='bg-base-200 px-3 py-2 rounded-md '>My Campaign</NavLink></li>
        <li><NavLink to="/mydonation" className='bg-base-200 px-3 py-2 rounded-md '>My Donations</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="space-x-3 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="" className='scale-75' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-5 font-semibold p-3 rounded-md menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3 font-bold">
                <NavLink to="/login" className="bg-green-100 p-3 rounded-md ">Login</NavLink>
                <NavLink to="/register" className="bg-blue-100 p-3 rounded-md ">Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;