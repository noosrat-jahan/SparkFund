import React from 'react';

const RunningCampaign = ({campaign}) => {
    return (
        <div className='  mx-auto   gap-6 p-3 hover:shadow-2xl rounded border-2 border-[#FFF6E9]'>
            <img src={campaign.image} alt="" className='w-full  rounded' />
            <div className='text-left space-y-3'>
                <h1 className='text-2xl text-red-500 font-bold mt-3'>{campaign.title}</h1>
                <p className='font-semibold text-xl'>Campaign Type: {campaign.camtype}</p>
                <p className='font-semibold text-justify'>{campaign.description}</p>
                <h4 className='bg-amber-200 p-2 w-2/3 font-bold text-[#7E1891]'>Deadline: {campaign.deadline}</h4>
                
                <button className='bg-[#F87A53]  font-bold text-white p-3 rounded-md shadow-2xl'>See More</button>
            </div>
        </div>
    );
};

export default RunningCampaign;