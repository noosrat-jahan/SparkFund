import React, { useContext } from 'react';
import logo from "../assets/crowd-logo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { IoMoon, IoSunny } from 'react-icons/io5';

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    const { user, LogOut, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                setUser(null)
                Swal.fire("Logged Out Successfully!");
                navigate('/login')

            })
            .catch(err => {
                console.log('error:', err.message);
            })
    }

    const links = <>

        <li><NavLink to="/" className='bg-amber-50 dark:text-black px-3 py-2 rounded-md '>Home</NavLink></li>
        <li><NavLink to="/allcampaign" className='bg-amber-50 dark:text-black px-3 py-2 rounded-md '>All Campaign</NavLink></li>

        {
            user && <>
                <li><NavLink to="/addcampaign" className='bg-amber-50 dark:text-black  px-3 py-2 rounded-md '>Add New Campaign</NavLink></li>
                <li><NavLink to="/mycampaign" className='bg-amber-50  dark:text-black px-3 py-2 rounded-md '>My Campaign</NavLink></li>
                <li><NavLink to="/mydonation" className='bg-amber-50  dark:text-black px-3 py-2 rounded-md '>My Donations</NavLink></li>
            </>
        }

        <li><NavLink to="/about" className='bg-amber-50  dark:text-black px-3 py-2 rounded-md '>About Us</NavLink></li>
        <li><NavLink to="/contact" className='bg-amber-50  dark:text-black px-3 py-2 rounded-md '>Contact</NavLink></li>
        <li><NavLink to="/support" className='bg-amber-50  dark:text-black px-3 py-2 rounded-md '>Support</NavLink></li>

    </>


    return (
        <div className="navbar justify-between  sticky top-0 z-30 bg-[#f0f5fb] w-full px-6 py-4 mx-auto  shadow-xl dark:bg-black">
            <div className="navbar-start">
                <div className="dropdown z-10 ">
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
                        className="space-x-3 space-y-5  menu-sm dropdown-content bg-blue-300 rounded-box z-[1] mt-3 w-52 p-3 py-4 shadow">
                        {links}
                    </ul>
                </div>
                <div className='w-full'>
                    <Link to="/"><img src={logo} alt="" className=' w-full md:w-2/3 lg:w-36' /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-5 font-semibold p-3 rounded-md menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {
                user ? <div className="navbar-end justify-center space-x-3 font-bold ">


                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className=" ">
                            <img src={user?.photoURL} alt="" className='rounded-full w-14 h-14 border border-gray-400' />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-purple-50 rounded-box z-10 w-48 p-5 shadow space-y-3 right-0">
                            <li><h2 className='text-base dark:text-blue-800 font-semibold'>{user?.displayName}</h2></li>
                            <li><Link to="/updateprofile" className="bg-blue-200 dark:bg-blue-900 p-3 rounded-md ">Update Profile</Link>
                            </li>
                            <li><Link onClick={handleLogOut} className="bg-blue-200 dark:bg-blue-900 p-3 rounded-md ">LogOut</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                    :
                    <div className="navbar-end space-x-3 font-bold">
                        <Link to="/login" className="bg-green-100 dark:text-black lg:p-3 p-1.5 rounded-md ">Login</Link>
                        <Link to="/register" className="bg-blue-100 dark:text-black lg:p-3 p-1.5 rounded-md ">Register</Link>
                    </div>

            }

            <button onClick={() => darkModeHandler()}
                className=' text-xl bg-blue-100 ml-3 p-2 dark:text-black rounded-full '
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Change Theme">
                {

                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button>

            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navbar;