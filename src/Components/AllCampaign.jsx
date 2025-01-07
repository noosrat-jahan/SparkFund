import React, { useState } from 'react';
import { Link, Outlet, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { Card } from "flowbite-react";
import CampaignCard from './CampaignCard';

const AllCampaign = () => {

    const navigate = useNavigate()

    let LoadedCampaigns = useLoaderData()
    const [myCampaigns, setmyCampaigns] = useState(LoadedCampaigns)


    const handleSort = () => {
        const sortedCampaign = [...myCampaigns].sort((a, b) => (a.amount) - (b.amount))
        setmyCampaigns(sortedCampaign)
    }

    return (
        <div>
            <div className='cam-bg'>
                <div className=' flex justify-between w-11/12 mx-auto p-4 mt-10'>
                    <h1 className='font-bold lg:text-3xl text-lg uppercase text-purple-700'>All Campaigns</h1>
                    <button onClick={handleSort} className='bg-purple-800 lg:px-4 px-2 py-2 text-white font-semibold rounded-md '>Sort By Amount</button>
                </div>
               
                {/* cards  */}
                <div className='mt-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr  gap-x-5 gap-y-10'>
                    {
                        myCampaigns.map(mycampaign => <CampaignCard key={mycampaign._id} mycampaign={mycampaign}></CampaignCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCampaign;