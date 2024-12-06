import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddNewCampaign = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddNewCampaign = e => {
        e.preventDefault()

        const form = e.target
        const image = form.image.value
        const title = form.title.value
        const camtype = form.camtype.value
        const amount = form.amount.value
        const deadline = form.deadline.value
        const count = form.count.value
        const description = form.description.value
        const newCampaign = { image, title, camtype, amount, deadline, count, description }
        console.log(newCampaign);

        fetch('http://localhost:5000/myCampaigns', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Added a new campaign successfully",
                        showConfirmButton: false,
                        timer: 2000
                      });
                    navigate('/mycampaign')
                }
            })
    }

    return (
        <div className='w-10/12 mx-auto mt-5'>
            <h1 className='text-4xl text-emerald-500 font-semibold'>Add New Campaign</h1>

            <form onSubmit={handleAddNewCampaign} className='mt-2 space-y-2'>

                <div className='flex flex-col lg:flex-row items-center gap-3 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} disabled className="input input-bordered" required />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-3 '>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Thumbnail</span>
                        </label>
                        <input type="text" name='image' placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Campaign Title</span>
                        </label>
                        <input type="text" name='title' placeholder="Enter Campaign Title" className="input input-bordered" required />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-3'>

                    <div className='form-control w-full'>
                        <label className="label">
                            <span className="label-text">Campaign Type</span>
                        </label>
                        <select name='camtype' className="select select-bordered  w-full ">
                            <option disabled selected>Which type of campaign?</option>
                            <option value="personal-issue">Personal issue</option>
                            <option value="startup">Startup</option>
                            <option value="business">Business</option>
                            <option value="creative-idea">Creative ideas</option>
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
                        <input type="date" name='deadline' placeholder="Enter coffee category" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Funding Count</span>
                        </label>
                        <input type="text" name='count' placeholder="Enter total funding count" className="input input-bordered" required />
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