import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const AllCampaign = () => {

    const navigate = useNavigate()
    const LoadedCampaigns = useLoaderData()
    // const [myCampaigns, setmyCampaigns] = useState(LoadedCampaigns)

    const handleSort = ()=>{
        LoadedCampaigns.sort((a, b) => (b.amount) - (a.amount))
        console.log(LoadedCampaigns);
    }

    return (
        <div className='cam-bg'>
            <div className=' flex justify-between w-11/12 mx-auto p-4 mt-5'>
                <h1 className='font-bold text-3xl uppercase text-purple-700'>All Campaigns</h1>
                <button onClick={()=>{handleSort}} className='bg-purple-800 px-4 py-2 text-white font-semibold rounded-md '>Sort By Amount</button>
            </div>
            <div className="overflow-x-auto w-[98%] mx-auto mt-10">
                <table className="table text-base">
                    {/* head */}
                    <thead className='text-lg dark:text-white'>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Thumbnail</th>
                            <th>Campaign Title</th>
                            
                            <th>Minimum Amount</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>

                        {
                            LoadedCampaigns.map((mycampaign, index) => <tr key={mycampaign._id}>
                                <th>{index + 1}</th>
                                <th>{mycampaign.email}</th>
                                <td><img src={mycampaign.image} alt="" className='w-16 h-14' /></td>
                                <td>{mycampaign.title}</td>
                                
                                <td>${mycampaign.amount}</td>
                                <td>{mycampaign.formattedDate}</td>
                                <td><Link  to={`/donationDetails/${mycampaign._id}`} className='bg-pink-300 rounded font-bold underline  p-2'>See More</Link></td>                            

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaign;