import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AllCampaign = () => {

    const navigate = useNavigate()
    const LoadedCampaigns = useLoaderData()
    // const [myCampaigns, setmyCampaigns] = useState(LoadedCampaigns)


    return (
        <div className='cam-bg'>
            <div className="overflow-x-auto w-[98%] mx-auto mt-10">
                <table className="table text-base">
                    {/* head */}
                    <thead className='text-lg'>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Thumbnail</th>
                            <th>Campaign Title</th>
                            <th>Campaign Type</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            LoadedCampaigns.map((mycampaign, index) => <tr key={mycampaign._id}>
                                <th>{index + 1}</th>
                                <th>{mycampaign.email}</th>
                                <td><img src={mycampaign.image} alt="" className='w-20 h-16' /></td>
                                <td>{mycampaign.title}</td>
                                <td>{mycampaign.camtype}</td>
                                <td>{mycampaign.deadline}</td>
                                <td><Link to={`/donationDetails/${mycampaign._id}`} className='bg-pink-300 rounded font-bold underline p-2'>See More</Link></td>
                               

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;