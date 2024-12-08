import React, { useContext, useState } from 'react';
import signup from "../assets/signup.png"
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {

    const { setUser, createNewUser, GoogleLogin } = useContext(AuthContext)
    const [errormessage, setErrormessage] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        const regUser = { name, email, photo, password }
        

        setErrormessage("")

        if(password.length < 6){
            setErrormessage("Password must be 6 character or longer")
            return
        }

        const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if(!passwordRegEx.test(password)){
            setErrormessage("Password must contain an uppercase letter, a lowercase letter, a digit and a special character")
            return
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user
                
                setUser(user)
                Swal.fire("Singed Up Successfully!");
                navigate(location?.state ? location.state :"/")
            })
            .catch(err => {
                console.log('Error:', err.message);
            })
    }

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then((result) => {
                const user = result.user
                
                setUser(user)
                Swal.fire("Log in with google is Successfull!");
                navigate(location?.state ? location.state :"/")
            })
            .catch(err => {
                console.log('Error:', err.message);
            })
    }


    return (
        <div className='w-11/12 h-max mt-5 mx-auto flex flex-col lg:flex-row items-start gap-10'>
            <img src={signup} alt="" className='lg:w-2/5 lg:mt-20' />

            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-lg border border-[#D0D0D0] ">
                <h1 className='text-3xl font-semibold'>Register</h1>
                {
                    errormessage && <p className='mt-3 font-semibold text-red-600'>{errormessage}</p>
                }
                <form onSubmit={handleSubmit} className="card-body gap-3 p-1">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="text" name='photo' placeholder="Your Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <button className="btn bg-[#fabf55] font-bold text-lg">Sign Up</button>
                    </div>
                    <div className="divider font-semibold">OR Sign In With</div>
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <button onClick={handleGoogleLogin} className='btn w-40 mx-auto text-lg flex items-center gap-2 bg-base-200 rounded-md justify-center'>Google <FcGoogle /></button>
                        <button className='btn w-40 mx-auto text-lg flex items-center gap-2 bg-base-200 rounded-md justify-center'>Github <FaGithub /></button>
                    </div>

                    <h2>Already have an account? <Link to="/login" className='text-[#efb343] font-bold'>Login</Link></h2>
                </form>
            </div>

        </div>
    );
};

export default Register;