import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RunningCampaign from './RunningCampaign';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";

import '../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


//import slider images
import slider1 from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"
// import slider4 from "../assets/slider4.jpg"

const Home = () => {

    const loadedCampaigns = useLoaderData()
    
    const currentTime = new Date().toLocaleString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }, { timeZone: 'UTC' });

    
    const runningCampaign = loadedCampaigns.filter(campaign => new Date(campaign.formattedDate) > new Date(currentTime))
   

    return (
        <div>
            <div className='mt-5'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    cssMode={true}
                    // navigation={true}
                    // pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg one'>
                        <div className='flex flex-col items-end text-right gap-3 mr-10'>
                            <h2 className='text-lime-100 text-4xl font-bold w-1/2'>Support meaningful causes addressing vital human needs—your contributions create a ripple of hope and opportunity.🌟</h2>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg two'>
                        <div className='flex flex-col items-start text-left gap-3 ml-10'>
                            <h2 className='text-lime-100 text-4xl font-semibold w-1/2'>Bring essential healthcare to underserved regions with solar-powered mobile clinics. Together, we can illuminate lives with sustainable energy and accessible medical care.🌟</h2>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg three'>
                        <div className='flex flex-col items-end text-right gap-3 mr-10'>
                            <h2 className='text-lime-100 text-4xl font-bold w-1/2'>Join the movement to create eco-friendly clothing from recycled materials. Support a vision where style meets sustainability, reducing waste while inspiring a greener future. 🌿</h2>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg four'>
                        <div className='flex flex-col items-end text-right gap-3 mr-10'>
                            <h2 className='text-lime-100 text-4xl font-bold w-1/2'>Support a sustainable future with eco-friendly deliveries using bicycles and e-scooters. Together, we can reduce carbon footprints and inspire cleaner, greener cities. 🌱</h2>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='mt-20'>
                <h1 className='text-4xl text-pink-500 font-bold font-poppins mb-3'> Running Campaigns</h1>

                <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-8'>
                    {
                        runningCampaign.map(campaign => <RunningCampaign key={campaign._id} campaign={campaign}></RunningCampaign>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;