import React, { useContext, useState } from 'react';
import login from "../assets/login.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {

    const { LogInUser, setUser, GoogleLogin } = useContext(AuthContext)
    const [errormessage, setErrormessage] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const logUser = { email, password }
        

        setErrormessage("")

        LogInUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                Swal.fire("Log In Successfull!");
                navigate(location?.state ? location.state : "/")
                
            })
            .catch(err => {
                console.log('Error:', err.message);
                if (err.message === "Firebase: Error (auth/invalid-credential).") {
                    toast.error("Invalid Email or Password", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }

            })
    }

    const handleGoogleLogin = () => {
        GoogleLogin()
            .then((result) => {
                const user = result.user
                // console.log(user);
                setUser(user)
                Swal.fire("Log in with google is Successfull!");
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                console.log('Error:', err.message);
            })
    }
    return (
        <div className='w-11/12 h-max mt-5 mx-auto flex flex-col lg:flex-row items-center gap-10'>
            <img src={login} alt="" className='md:w-2/5 ' />

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg border border-[#D0D0D0] ">
                <h1 className='text-2xl font-semibold'>Login</h1>
                <form onSubmit={handleLogin} className="card-body gap-3 p-1">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label justify-end">
                            <a href="#" className="label-text-alt link link-hover text-[#efb343] font-semibold">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-[#fabf55] font-bold text-lg">Sign In</button>
                    </div>
                    <div className="divider font-semibold">OR Sign In With</div>
                    <button onClick={handleGoogleLogin} className='btn w-40 mx-auto text-lg flex items-center gap-2 bg-base-200 rounded-md justify-center'>Google <FcGoogle /></button>

                    <h2>Don't Have an Account? <Link to="/register" className='text-[#efb343] font-bold'>Sign Up</Link></h2>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;