import React from 'react';
import logo from "../assets/crowd-logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-bg px-3 bg-amber-100 dark:text-black mt-10 flex flex-col items-center space-y-2 py-10'>
            <img src={logo} alt="" className='lg:w-1/5 ' />
            <h1 className='font-semibold font-rancho text-xl'>"Fuel Ambitions, Spark Change"</h1>
            <h2 className='font-semibold text-xl w-2/3'>A modern platform  to fund ideas, ventures, and meaningful causes and for collaborative funding and limitless innovation.</h2>
            <div className='flex items-center gap-3 py-6'>
                <span className='bg-amber-300 rounded-full p-2.5'><FaLinkedinIn /></span>
                <span className='bg-amber-300 rounded-full p-2.5'><FaYoutube /></span>
                <span className='bg-amber-300 rounded-full p-2.5'><FaInstagram /></span>
                <span className='bg-amber-300 rounded-full p-2.5'><FaFacebookF /></span>
                <span className='bg-amber-300 rounded-full p-2.5'><FaTwitter /></span>
            </div>
            <hr className='h-0.5 w-4/5 bg-amber-300' />

            <div class="container px-10 py-6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div className='text-left'>
                    <h3 class="font-bold text-lg mb-4">ABOUT</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-gray-400">About SparkFund</a></li>
                        <li><a href="#" class="hover:text-gray-400">Careers</a></li>
                        <li><a href="#" class="hover:text-gray-400">Disclosures & Disclaimers</a></li>
                        <li><a href="#" class="hover:text-gray-400">Contact Us</a></li>
                        <li><a href="#" class="hover:text-gray-400">Company News</a></li>
                    </ul>
                </div>

                {/* Invest Section */}
                <div className='text-left'>
                    <h3 class="font-bold text-lg mb-4">INVEST</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-gray-400">Browse Marketplace</a></li>
                        <li><a href="#" class="hover:text-gray-400">Ways To Invest</a></li>
                        <li><a href="#" class="hover:text-gray-400">Marketplace Performance</a></li>
                        <li><a href="#" class="hover:text-gray-400">Investment Screening Process</a></li>
                        <li><a href="#" class="hover:text-gray-400">Our Investor Commitments</a></li>
                        <li><a href="#" class="hover:text-gray-400">Previous Investment Opportunities</a></li>
                    </ul>
                </div>

                {/* Investor Resources Section */}
                <div className='text-left'>
                    <h3 class="font-bold text-lg mb-4">INVESTOR RESOURCES</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-gray-400">CRE Education</a></li>
                        <li><a href="#" class="hover:text-gray-400">CRE Market Outlook</a></li>
                        <li><a href="#" class="hover:text-gray-400">New Investor Orientation</a></li>
                        <li><a href="#" class="hover:text-gray-400">Help Center</a></li>
                    </ul>
                </div>

                {/* For Sponsors Section  */}
                <div className='text-left'>
                    <h3 class="font-bold text-lg mb-4">FOR SPONSORS</h3>
                    <ul class="space-y-2 ">
                        <li><a href="#" class="hover:text-gray-400">Raise Capital</a></li>
                        <li><a href="#" class="hover:text-gray-400">Is Your Deal Right For SparkFund?</a></li>
                        <li><a href="#" class="hover:text-gray-400">Get On The Marketplace</a></li>
                        <li><a href="#" class="hover:text-gray-400">Post Fundraise Management</a></li>
                        <li><a href="#" class="hover:text-gray-400">Results</a></li>
                        <li><a href="#" class="hover:text-gray-400">Request Info</a></li>
                    </ul>
                </div>
            </div>
            <hr className='h-0.5 w-4/5 bg-amber-300' />
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by SparkFund.</p>
            </aside>
        </div>
    );
};

export default Footer;