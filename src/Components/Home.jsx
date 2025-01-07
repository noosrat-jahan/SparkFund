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

import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'

const Home = () => {

    const loadedCampaigns = useLoaderData()

    const currentTime = new Date().toLocaleString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }, { timeZone: 'UTC' });


    const runningCampaign = loadedCampaigns.filter(campaign => new Date(campaign.formattedDate) > new Date(currentTime))


    return (
        <div className=''>


            {/* banner or slider section */}
            <div className=''>
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
                        <div className='flex flex-col items-end text-right gap-10 lg:mr-10 mr-4'>
                            <Reveal className='text-lime-100 lg:text-4xl font-bold lg:w-1/2'>Support meaningful causes addressing vital human needs—your contributions create a ripple of hope and opportunity.🌟</Reveal>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg two'>
                        <div className='flex flex-col items-start text-left gap-10 lg:ml-10 ml-4'>
                            <Slide direction="right" className='text-lime-100 lg:text-4xl font-semibold lg:w-1/2'>Bring essential healthcare to underserved regions with solar-powered mobile clinics. Together, we can illuminate lives with sustainable energy and accessible medical care.🌟</Slide>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg three'>
                        <div className='flex flex-col items-end text-right gap-10 lg:mr-10 mr-4'>
                            <Reveal className='text-lime-100 lg:text-4xl font-bold lg:w-1/2'>Join the movement to create eco-friendly clothing from recycled materials. Support a vision where style meets sustainability, reducing waste while inspiring a greener future. 🌿</Reveal>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg four'>
                        <div className='flex flex-col items-end text-right gap-10 lg:mr-10 mr-3'>
                            <Reveal className='text-lime-100 lg:text-4xl font-bold lg:w-1/2'>Support a sustainable future with eco-friendly deliveries using bicycles and e-scooters. Together, we can reduce carbon footprints and inspire cleaner, greener cities. 🌱</Reveal>
                            <Link to="/allcampaign" className='bg-[#c1ec4a] uppercase px-4 py-2 rounded-md text-black'>see campaigns</Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


            {/* running campaign section */}
            <div className='mt-6 '>
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

                <div className='w-11/12 mt-5 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-8'>
                    {
                        runningCampaign.map(campaign => <RunningCampaign key={campaign._id} campaign={campaign}></RunningCampaign>)
                    }
                </div>
            </div>


            {/* section-3 */}
            <h1 className='lg:text-3xl text-xl uppercase text-purple-950 dark:text-amber-100 font-semibold mt-20 mb-10'>
                What Investors are Saying</h1>
            <div class="grid grid-cols-1 lg:grid-cols-4 justify-center gap-6 w-11/12 mx-auto">
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
            <div className='bg-[#f4f4f4] dark:bg-black mt-20 grid grid-cols-1 lg:grid-cols-2 items-center p-14 gap-5 gap-y-10'>
                <img src={faq} alt="" className='w-full' />
                <div className='text-left space-y-3'>
                    <h1 className='lg:text-3xl text-xl uppercase text-purple-950 dark:text-blue-100 font-semibold mb-10'>
                        Frequently asked QUESTIONS?</h1>
                    <div className="collapse collapse-arrow bg-base-200 dark:bg-gray-500">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What is crowdfunding?</div>
                        <div className="collapse-content">
                            <p>Crowdfunding is a way to raise money by collecting small contributions from a large number of people, typically via the internet, to fund projects, ideas, or causes.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200  dark:bg-gray-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How can I start a campaign on SparkFund?</div>
                        <div className="collapse-content">
                            <p>To start a campaign, create an account, click on "Start Campaign," and fill in details such as the title, goal amount, deadline, and description. You can also upload relevant images or videos.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200  dark:bg-gray-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Is there a fee for creating a campaign?</div>
                        <div className="collapse-content">
                            <p>Yes, SparkFund charges a small percentage of the funds raised to cover operational costs. Check the fee structure on our website for details.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200  dark:bg-gray-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How do donors contribute to campaigns?</div>
                        <div className="collapse-content">
                            <p>Donors can browse campaigns, select one they want to support, and make secure payments using debit/credit cards, bank transfers, or digital wallets.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200  dark:bg-gray-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">What happens if a campaign doesn’t meet its goal?</div>
                        <div className="collapse-content">
                            <p>If the campaign doesn’t reach its funding goal, the terms depend on the type of funding:
                                All or Nothing: Funds are returned to the donors.
                                Keep It All: Campaigners keep whatever funds are raised..</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200  dark:bg-gray-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">How do I know my contribution is being used correctly?</div>
                        <div className="collapse-content">
                            <p>Campaign owners are encouraged to provide updates and evidence of fund usage. SparkFund also monitors campaigns to maintain transparency and accountability.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200  dark:bg-gray-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Can I invest in multiple campaigns?</div>
                        <div className="collapse-content">
                            <p>Yes, you can invest in as many campaigns as you want. SparkFund allows you to support multiple causes based on your interests and capacity.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200  dark:bg-gray-500">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Can I cancel my investment?</div>
                        <div className="collapse-content">
                            <p>Yes, you can cancel your investment within the campaign’s refund policy window, depending on the campaign type. Check the terms for each campaign before investing.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}

            <section className="bg-gradient-to-r from-amber-100 to-amber-50 py-16">
                <div className="container mx-auto px-6 lg:px-16 text-center">
                    <h2 className="text-4xl font-bold text-amber-600 mb-6">
                        Our Community
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
                        At SparkFund, we’re more than just a crowdfunding platform. We’re a
                        passionate and diverse community of dreamers, changemakers, and
                        supporters. Together, we bring ideas to life and create a lasting
                        impact.
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <img
                                src={person1}
                                alt="Dreamer"
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-amber-600">Dreamers</h3>
                            <p className="text-gray-600 mt-2">
                                Visionaries with innovative ideas come here to make their dreams a
                                reality.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <img
                                src={person2}
                                alt="Supporter"
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-amber-600">Supporters</h3>
                            <p className="text-gray-600 mt-2">
                                Generous individuals join hands to support meaningful projects and
                                causes.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <img
                                src={person3}
                                alt="Changemaker"
                                className="rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-amber-600">
                                Changemakers
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Together, we make a difference in communities worldwide, one
                                project at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;