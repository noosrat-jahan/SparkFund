import React from 'react';

const Contact = () => {
    return (

        <div className='dark:text-black  bg-gradient-to-b from-white via-amber-50 to-amber-50 h-auto pb-10 '>
            <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 items-center justify-around w-11/12 mx-auto gap-10'>
                
                <div className='py-5  text-left space-y-6  font-poppins'>
                    <h1 className='text-5xl font-bold '>Get in Touch</h1>
                    {/* <div className='w-64 bg-amber-300 h-4 rounded-sm absolute top-1 '></div> */}

                    <p className='text-lg leading-9'>We’re here to help your ideas take flight! Whether you have questions, feedback, or need support, our team is ready to assist you every step of the way.

                        Feel free to reach out to us for: <br />

                        Guidance on launching your campaign <br />
                        Assistance with contributions or technical support <br />
                        Sharing your thoughts to improve SparkFund  <br />
                        Let’s create something extraordinary together! Contact us and let the sparks of collaboration ignite.</p>
                </div>

                <div>
                    <h1 className='text-4xl font-bold'> Contact Form</h1>
                    <div className="mt-5 card bg-base-100 w-full p-1 shrink-0 shadow-xl">
                        <form className="card-body p-1 ">
                            <div className='flex gap-3'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="first name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="last name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Organization (Optional)</span>
                                </label>
                                <input type="text" placeholder="organization" className="input input-bordered" />
                            </div>
                            <textarea className="textarea textarea-bordered mt-2" placeholder="message"></textarea>
                            <div className="form-control mt-6">
                                <button className="btn bg-amber-400 text-white font-bold text-lg">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contact;