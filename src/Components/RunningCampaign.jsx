import React from 'react';
import { Link } from 'react-router-dom';

const RunningCampaign = ({campaign}) => {
    return (
        <div className='  mx-auto gap-6 hover:shadow-2xl pb-4 shadow-black rounded border-2 border-[#FFF6E9]'>
            <img src={campaign.image} alt="" className='w-full  rounded' />
            <div className='text-left space-y-3 pb-3 px-4'>
                <h1 className='text-2xl text-red-500 font-bold mt-3'>{campaign.title}</h1>
                <p className='font-bold text-xl text-[#000B58] dark:text-pink-400 uppercase'> {campaign.camtype}</p>
                <p className='font-semibold text-justify'>{campaign.description}</p>
                <h4 className='bg-amber-200 p-2 w-2/3 font-bold text-[#7E1891]'>Deadline: {campaign.formattedDate}</h4>
                <br />
                <Link to={`/donationDetails/${campaign._id}`} className='bg-[#F87A53]  font-bold text-white p-3  rounded-md shadow-2xl'>See More</Link >
            </div>
        </div>
    );
};

export default RunningCampaign;