import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaign = () => {

    const LoadedCampaigns = useLoaderData()
    const [myCampaigns, setmyCampaigns] = useState(LoadedCampaigns)

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/myCampaigns/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Campaign has been deleted.",
                            icon: "success"
                        });

                        const remainingCampaign = myCampaigns.filter(mycamp=>mycamp._id !== id)
                        setmyCampaigns(remainingCampaign)
                    })

            }
        });
    }

    return (
        <div className='cam-bg'>
            <div className="overflow-x-auto w-11/12 mx-auto mt-10">
                <table className="table text-base">
                    {/* head */}
                    <thead className='text-xl'>
                        <tr>
                            <th></th>
                            <th>Thumbnail</th>
                            <th>Campaign Title</th>
                            <th>Campaign Type</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myCampaigns.map((mycampaign, index) => <tr key={mycampaign._id}>
                                <th>{index + 1}</th>
                                <td><img src={mycampaign.image} alt="" className='w-20 h-16' /></td>
                                <td>{mycampaign.title}</td>
                                <td>{mycampaign.camtype}</td>
                                <td>{mycampaign.deadline}</td>
                                <td><button><FaEdit /></button></td>
                                <td><button onClick={() => { handleDelete(mycampaign._id) }}><MdDelete /></button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;