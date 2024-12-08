import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const DonationDetails = () => {

    const donationDetails = useLoaderData()
    const {name, email, image, title, camtype, description, formattedDate, amount, count } = donationDetails

    
    const handleDonate = ()=>{

        const currentTime = new Date().toLocaleString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }, { timeZone: 'UTC' });
    
        const DonatedCampaign = {name, email, image, title, camtype, description, formattedDate, amount, count }


        if(new Date(formattedDate) < new Date(currentTime)){
            toast.error("Sorry, Campaign is no longer active!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            return
        }

        Swal.fire({
            title: "Are you ready to donate?",
            text: "Donation amount will be deducted from your current balance.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sure, I am ready to donate"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://crowd-funding-application-server.vercel.app/myDonation/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(DonatedCampaign)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: "Congratulations!!",
                            text: " Successfully added your Donation",
                            imageUrl: image,
                            imageWidth: 500,
                            imageHeight: 200,
                            imageAlt: "Custom image"
                          });
                    }
                })             
            }
          });   
    }

    return (
        <div className='  mx-auto flex flex-col lg:flex-row gap-6  justify-evenly px-6 py-10 shadow-xl rounded'>
            <img src={donationDetails.image} alt="" className='lg:w-1/2  rounded' />
            <div className='text-left space-y-3'>
                <h1 className='text-3xl text-red-500 font-bold'>{donationDetails.title}</h1>
                <p className='font-semibold text-xl'>Campaign Type: {donationDetails.camtype}</p>
                <p className='font-semibold text-justify'>{donationDetails.description}</p>
                <h4 className='bg-amber-200 p-2 w-1/2 font-bold text-[#7E1891]'>Deadline: {donationDetails.formattedDate}</h4>
                <div className='flex gap-10'>
                    <p className='text-[#EB5B00] font-bold text-lg'>Minimum Donation Amount: {donationDetails.amount}</p>
                    <p className='text-[#EB5B00] font-bold text-lg'>Total Count of Donation: {donationDetails.count}</p>
                </div>
                <button onClick={handleDonate} className='bg-[#04a85b] font-bold text-white p-3 rounded-md shadow-2xl'>Donate Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;