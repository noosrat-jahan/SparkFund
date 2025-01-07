import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ mycampaign }) => {
    return (
        <div>
            <Card
                className="h-full"
                imgAlt="campaignImage"
                imgSrc={mycampaign.image}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {mycampaign.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <h2 className='font-bold text-xl text-amber-500'>Min Amount: $ {mycampaign.amount}</h2>
                <h2>{mycampaign.formattedDate}</h2>
                <Link to={`/donationDetails/${mycampaign._id}`} className='bg-pink-300 rounded font-bold underline dark:text-black p-2'>See More</Link>
            </Card>
        </div>
    );
};

export default CampaignCard;