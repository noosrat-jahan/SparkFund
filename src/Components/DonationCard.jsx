import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({donation}) => {
    return (
        <div className='  mx-auto gap-6 hover:shadow-2xl shadow-black rounded border-2 border-[#FFF6E9]'>
            <img src={donation.image} alt="" className='w-full  rounded' />
            <div className='text-left space-y-3 pb-3 px-4'>
                <h1 className='text-2xl text-red-500 font-bold mt-3'>{donation.title}</h1>
                <p className='font-bold text-xl text-[#000B58] uppercase'> {donation.camtype}</p>
                <p className='font-semibold text-justify'>{donation.description}</p>
                
            </div>
        </div>
    );
};

export default DonationCard;