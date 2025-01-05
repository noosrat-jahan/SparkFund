import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RunningCampaign from './RunningCampaign';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Typewriter } from 'react-simple-typewriter'
import Reveal, { Fade, Slide } from "react-awesome-reveal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";

import '../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


//import slider images

import faq from "../assets/faq.png"
import logo from "../assets/crowd-logo.png"

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
            

            {/* banner or slider section */}
            <div className='mt-5'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    cssMode={true}
                    // navigation={true}
                    // pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg one'>
                        <div className='flex flex-col items-end text-right gap-3 lg:mr-10 mr-4'>
                            <Reveal className='text-lime-100 lg:text-4xl font-bold lg:w-1/2'>Support meaningful causes addressing vital human needs—your contributions create a ripple of hope and opportunity.🌟</Reveal>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg two'>
                        <div className='flex flex-col items-start text-left gap-3 lg:ml-10 ml-4'>
                            <Slide direction="right" className='text-lime-100 lg:text-4xl font-semibold lg:w-1/2'>Bring essential healthcare to underserved regions with solar-powered mobile clinics. Together, we can illuminate lives with sustainable energy and accessible medical care.🌟</Slide>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg three'>
                        <div className='flex flex-col items-end text-right gap-3 lg:mr-10 mr-4'>
                            <Reveal className='text-lime-100 lg:text-4xl font-bold lg:w-1/2'>Join the movement to create eco-friendly clothing from recycled materials. Support a vision where style meets sustainability, reducing waste while inspiring a greener future. 🌿</Reveal>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg four'>
                        <div className='flex flex-col items-end text-right gap-3 lg:mr-10 mr-3'>
                            <Reveal className='text-lime-100 lg:text-4xl font-bold lg:w-1/2'>Support a sustainable future with eco-friendly deliveries using bicycles and e-scooters. Together, we can reduce carbon footprints and inspire cleaner, greener cities. 🌱</Reveal>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


            {/* running campaign section */}
            <div className='mt-20'>
                <h1 className='text-4xl text-pink-500 font-bold font-poppins typewriter-container'>
                    <Typewriter
                        words={['Running Campaigns']}
                        loop={0} // Only run once
                        cursor
                        cursorStyle=""
                        typeSpeed={90}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </h1>

                <div  className='w-11/12 mt-10 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-8'>
                    {
                        runningCampaign.map(campaign => <RunningCampaign key={campaign._id} campaign={campaign}></RunningCampaign>)
                    }
                </div>
            </div>


            {/* section-3 */}
            <h1 className='lg:text-3xl uppercase text-purple-950 font-semibold my-8'>
                What Investors are Saying</h1>
            <div class="grid grid-cols-1 lg:grid-cols-4 justify-center gap-6 p-6">
                <div class=" bg-white shadow-md rounded-lg p-6 text-center">
                    <img src={logo} alt="Logo" class="w-28 h-20 mx-auto mb-4" />
                    <div class="text-amber-500 text-lg font-semibold mb-2">⭐⭐⭐⭐⭐</div>
                    <p class="text-gray-700 italic mb-4">"SparkFund made investing so easy and transparent. I felt confident at every step."</p>
                    <h3 class="text-gray-900 font-bold">Sarah K.</h3>
                </div>

                <div class=" bg-white shadow-md rounded-lg p-6 text-center">
                    <img src={logo} alt="Logo" class="w-28 h-20 mx-auto mb-4" />
                    <div class="text-amber-500 text-lg font-semibold mb-2">⭐⭐⭐⭐⭐</div>
                    <p class="text-gray-700 italic mb-4">"I love the detailed insights and opportunities SparkFund provides. It’s a game-changer."</p>
                    <h3 class="text-gray-900 font-bold">David P.</h3>
                </div>

                <div class=" bg-white shadow-md rounded-lg p-6 text-center">
                    <img src={logo} alt="Logo" class="w-28 h-20 mx-auto mb-4" />
                    <div class="text-amber-500 text-lg font-semibold mb-2">⭐⭐⭐⭐⭐</div>
                    <p class="text-gray-700 italic mb-4">"Investing through SparkFund connected me to impactful ventures I never knew existed."</p>
                    <h3 class="text-gray-900 font-bold">Priya M.</h3>
                </div>

                <div class=" bg-white shadow-md rounded-lg p-6 text-center">
                    <img src={logo} alt="Logo" class="w-28 h-20 mx-auto mb-4" />
                    <div class="text-amber-500 text-lg font-semibold mb-2">⭐⭐⭐⭐⭐</div>
                    <p class="text-gray-700 italic mb-4">"SparkFund gave me the confidence to grow my portfolio responsibly and efficiently."</p>
                    <h3 class="text-gray-900 font-bold">Alex J.</h3>
                </div>
            </div>


            {/* section four */}
            <div className='bg-[#f4f4f4] mt-10 grid grid-cols-1 lg:grid-cols-2 items-center p-10 gap-5'>
                <img src={faq} alt="" className='w-full' />
                <div className='text-left'>
                    <h1 className='lg:text-3xl uppercase text-purple-950 font-semibold mb-5'>
                        Frequently asked QUESTIONS?</h1>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is crowdfunding?</div>
                        <div className="collapse-content">
                            <p>Crowdfunding is a way to raise money by collecting small contributions from a large number of people, typically via the internet, to fund projects, ideas, or causes.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How can I start a campaign on SparkFund?</div>
                        <div className="collapse-content">
                            <p>To start a campaign, create an account, click on "Start Campaign," and fill in details such as the title, goal amount, deadline, and description. You can also upload relevant images or videos.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Is there a fee for creating a campaign?</div>
                        <div className="collapse-content">
                            <p>Yes, SparkFund charges a small percentage of the funds raised to cover operational costs. Check the fee structure on our website for details.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How do donors contribute to campaigns?</div>
                        <div className="collapse-content">
                            <p>Donors can browse campaigns, select one they want to support, and make secure payments using debit/credit cards, bank transfers, or digital wallets.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">What happens if a campaign doesn’t meet its goal?</div>
                        <div className="collapse-content">
                            <p>If the campaign doesn’t reach its funding goal, the terms depend on the type of funding:
                                All or Nothing: Funds are returned to the donors.
                                Keep It All: Campaigners keep whatever funds are raised..</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How do I know my contribution is being used correctly?</div>
                        <div className="collapse-content">
                            <p>Campaign owners are encouraged to provide updates and evidence of fund usage. SparkFund also monitors campaigns to maintain transparency and accountability.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Can I invest in multiple campaigns?</div>
                        <div className="collapse-content">
                            <p>Yes, you can invest in as many campaigns as you want. SparkFund allows you to support multiple causes based on your interests and capacity.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Can I cancel my investment?</div>
                        <div className="collapse-content">
                            <p>Yes, you can cancel your investment within the campaign’s refund policy window, depending on the campaign type. Check the terms for each campaign before investing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;