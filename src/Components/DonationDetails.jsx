import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DonationDetails = () => {

    const donationDetails = useLoaderData()

    return (
        <div className='  mx-auto  flex gap-6  justify-evenly px-6 py-10 shadow-xl rounded'>
            <img src={donationDetails.image} alt="" className='w-1/2  rounded' />
            <div className='text-left space-y-3'>
                <h1 className='text-3xl text-red-500 font-bold'>{donationDetails.title}</h1>
                <p className='font-semibold text-xl'>Campaign Type: {donationDetails.camtype}</p>
                <p className='font-semibold text-justify'>{donationDetails.description}</p>
                <h4 className='bg-amber-200 p-2 w-1/2 font-bold text-[#7E1891]'>Deadline: {donationDetails.deadline}</h4>
                <div className='flex gap-10'>
                    <p className='text-[#EB5B00] font-bold text-lg'>Minimum Donation Amount: {donationDetails.amount}</p>
                    <p className='text-[#EB5B00] font-bold text-lg'>Total Count of Donation: {donationDetails.count}</p>
                </div>
                <button className='bg-[#04a85b] font-bold text-white p-3 rounded-md shadow-2xl'>Donate Now</button>
            </div>
        </div>
    );
};

export default DonationDetails;