import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RunningCampaign from './RunningCampaign';


const Home = () => {

    const loadedCampaigns = useLoaderData()

    return (
        <div>
            <h1 className='text-4xl text-pink-500 font-bold mt-3 font-poppins mb-3'> Running Campaigns</h1>

            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    loadedCampaigns.map(campaign => <RunningCampaign key={campaign._id} campaign={campaign}></RunningCampaign>)
                }
            </div>

        </div>
    );
};

export default Home;