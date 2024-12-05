import React from 'react';
import error from "../assets/404.png"
import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';

const ErrorPage = () => {
    return (
        <div>
            <img src={error} alt=""  className='w-1/2 mx-auto'/>
            <Link to="/" className='btn btn-info text-white text-2xl'> <IoMdHome /> Back To Home</Link>
        </div>
    );
};

export default ErrorPage;