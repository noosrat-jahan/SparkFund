import React from 'react';

const AddNewCampaign = () => {
    return (
        <div className='w-10/12 mx-auto mt-5'>
            <h1 className='text-4xl text-emerald-500 font-semibold'>Add New Campaign</h1>
            <form className='mt-2 space-y-2'>
                <div className='flex flex-col lg:flex-row items-center gap-3 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name='name' defaultValue="Samara" disabled className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name='email'  className="input input-bordered" required />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-3 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Campaign Title</span>
                        </label>
                        <input type="text" name='chef' placeholder="Enter Campaign Title" className="input input-bordered" required />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-3'>

                    <div className='form-control w-full'>
                        <label className="label">
                            <span className="label-text">Campaign Type</span>
                        </label>
                        <select className="select select-bordered  w-full ">
                            <option disabled selected>Which type of campaign?</option>
                            <option>Personal issue</option>
                            <option>Startup</option>
                            <option>Business</option>
                            <option>Creative ideas</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Minimum donation amount</span>
                        </label>
                        <input type="number" name='amount' placeholder="Enter Donation Amount" className="input input-bordered" required />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-3'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name='category' placeholder="Enter coffee category" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Funding Count</span>
                        </label>
                        <input type="text" name='details' placeholder="Enter total funding count" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" id="" cols="30" placeholder='Add a short description...' className="textarea textarea-bordered"></textarea>
                </div>
                <input type="submit" value="Add Campaign" className='bg-emerald-200 btn rounded w-full mt-5  font-rancho font-bold text-2xl cursor-pointer hover:bg-emerald-400 border border-[#331A15]' />
            </form>
        </div>
    );
};

export default AddNewCampaign;