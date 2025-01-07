import React from 'react';

const Support = () => {
    return (
        <div className='w-10/12 mx-auto space-y-10 mt-10 '>

            <section>
                <h2 className="text-2xl font-semibold text-gray-700  dark:text-white mb-4">User Guide</h2>
                <p className="text-gray-600  dark:text-white ">
                    New to SparkFund? Check out our step-by-step user guide to learn how to create campaigns, track progress, and engage with donors.
                </p>
                <a
                    href="/user-guide"
                    className="inline-block mt-4 text-amber-500 hover:underline"
                >
                    View User Guide →
                </a>
            </section>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-700  dark:text-white mb-4">Live Chat</h2>
                <p className="text-gray-600  dark:text-white">
                    Need immediate help? Start a live chat with our support team by clicking the button below.
                </p>
                <button
                    className="bg-amber-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-amber-600 transition"
                    onClick={() => alert('Launching chat...')}
                >
                    Start Live Chat
                </button>
            </div>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-700  dark:text-white mb-4">Knowledge Base</h2>
                <p className="text-gray-600  dark:text-white">
                    Browse our collection of articles, tutorials, and FAQs to find quick answers and step-by-step guides.
                </p>
                <div className="mt-4 space-y-2">
                    <a href="/article-1" className="block text-amber-500 hover:underline">
                        → How to set up your first campaign
                    </a>
                    <a href="/article-2" className="block text-amber-500 hover:underline">
                        → Tips for maximizing donations
                    </a>
                    <a href="/article-3" className="block text-amber-500 hover:underline">
                        → Payment methods and security
                    </a>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-700  dark:text-white mb-4">Submit a Support Ticket</h2>
                <p className="text-gray-600  dark:text-white mb-6">
                    Can’t find the help you need? Submit a support ticket, and our team will get back to you as soon as possible.
                </p>
                <form className="space-y-4 bg-white p-6 w-4/5 mx-auto shadow rounded-md">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-amber-400"
                    />
                    <textarea
                        placeholder="Describe your issue"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-amber-400"
                        rows="4"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition"
                    >
                        Submit Ticket
                    </button>
                </form>
            </section>

        </div>
    );
};

export default Support;