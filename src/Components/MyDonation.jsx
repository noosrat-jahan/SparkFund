import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';

const MyDonation = () => {
    const myDonations = useLoaderData()
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            {
                myDonations.map(donation=> <DonationCard key={donation._id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default MyDonation;