import React, { useContext } from 'react';
import logo from "../assets/crowd-logo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { IoMoon, IoSunny } from 'react-icons/io5';


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
        <li><NavLink to="/" className='bg-base-200 dark:text-black px-3 py-2 rounded-md '>Home</NavLink></li>
        <li><NavLink to="/allcampaign" className='bg-base-200 dark:text-black px-3 py-2 rounded-md '>All Campaign</NavLink></li>
        <li><NavLink to="/addcampaign" className='bg-base-200 dark:text-black  px-3 py-2 rounded-md '>Add New Campaign</NavLink></li>
        <li><NavLink to="/mycampaign" className='bg-base-200  dark:text-black px-3 py-2 rounded-md '>My Campaign</NavLink></li>
        <li><NavLink to="/mydonation" className='bg-base-200  dark:text-black px-3 py-2 rounded-md '>My Donations</NavLink></li>
    </>
    return (
        <div className="navbar  w-11/12 mx-auto ">
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
                        className="space-x-3 space-y-5  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="" className='w-3/4 ' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-5 font-semibold p-3 rounded-md menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {
                user ? <div className="navbar-end space-x-3 font-bold">
                    <h3>{user?.email}</h3>
                    <Link onClick={handleLogOut} className="bg-blue-100 dark:bg-blue-900 p-3 rounded-md ">LogOut</Link>
                </div>
                    :
                    <div className="navbar-end space-x-3 font-bold">
                        <Link to="/login" className="bg-green-100 dark:text-black p-3 rounded-md ">Login</Link>
                        <Link to="/register" className="bg-blue-100 dark:text-black p-3 rounded-md ">Register</Link>
                    </div>

            }

            <button onClick={() => darkModeHandler()} className='ml-3'>
                {

                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button>
        </div>
    );
};

export default Navbar;