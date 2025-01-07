import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='relative mt-20 space-y-5 w-7/12 mx-auto flex flex-col items-center'>
                <h1 className='text-4xl font-semibold font-poppins z-10'>About SparkFund</h1>
                <div className='w-52 bg-amber-300 h-4 ml-32 rounded-sm absolute top-1 '></div>
                <p className='text-lg leading-8'>At SparkFund, we believe in the power of collective effort to turn dreams into reality. Founded with a vision to empower changemakers, innovators, and dreamers, SparkFund serves as a platform where ideas ignite, grow, and flourish through community support.
                <br /> <br />
                Whether you're looking to launch a creative project, fund a cause, or bring innovative ideas to life, SparkFund connects you with like-minded supporters who share your vision. With a transparent and user-friendly approach, we ensure every contribution sparks a meaningful impact.

                Join us in fueling dreams and creating a brighter future—one spark at a time.</p>
            </div>
        </div>
    );
};

export default AboutUs;