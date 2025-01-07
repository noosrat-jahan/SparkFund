import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const { UpdateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleUpdateProfile = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        UpdateUser({ displayName: name, photoURL: photo })
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Profile has been updated successfully",
                    showConfirmButton: false,
                    timer: 2000
                });

                navigate('/')
            })
            .catch(err => {
                console.log('Error:', err.message);
            })
    }
    return (
        <div className='px-4'>
            <div className='card bg-base-100 mt-5 w-full mx-auto max-w-md shrink-0 shadow-lg border border-[#D0D0D0] dark:bg-black '>
                <h1 className='text-3xl font-semibold mb-4'>Update Profile Information</h1>
                <form onSubmit={handleUpdateProfile} className="card-body gap-3 p-3 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <button className="btn bg-[#fabf55] font-bold text-lg">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;