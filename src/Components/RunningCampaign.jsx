import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';


import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const RunningCampaign = ({ campaign }) => {

    const { formattedDate } = campaign


    const daysLeft = Math.ceil((new Date(formattedDate) - new Date()) / (1000 * 60 * 60 * 24))
    return (

        <div  className='h-full transform transition-transform duration-300 hover:scale-105  mx-auto gap-6  pb-4 shadow-black rounded border-2 border-[#FFF6E9]'>
            <img src={campaign.image} alt="" className='w-full  rounded' />
            <div className='text-left space-y-3 pb-3 px-4'>
                <h1 className='text-xl text-red-500 font-bold mt-3'>{campaign.title}</h1>
                <p className='font-bold text-lg text-[#000B58] dark:text-pink-400 uppercase'> {campaign.camtype}</p>
                <p className='font-semibold text-justify'>{campaign.description}</p>
                <h4 className='bg-amber-200 p-2 w-4/5 md:w-1/2 lg:w-[92%] font-bold text-[#7E1891]'
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${daysLeft} days left`}>
                    Deadline: {campaign.formattedDate}</h4>
                <br />
                <Link to={`/donationDetails/${campaign._id}`} className='bg-[#F87A53]  font-bold text-white p-3  rounded-md shadow-2xl'>See More</Link >
            </div>
            <Tooltip id="my-tooltip" />
        </div>

    );
};

export default RunningCampaign;