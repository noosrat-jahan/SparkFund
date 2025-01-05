import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';
import { AuthContext } from '../Provider/AuthProvider';

const MyDonation = () => {

    const {user} = useContext(AuthContext)
    const LoadedDonation = useLoaderData()
    const myDonations = LoadedDonation.filter(donation => donation.userEmail === user?.email)

    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            {
                myDonations.map(donation=> <DonationCard key={donation._id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default MyDonation;