import React, { useContext } from 'react';
import { authContext } from '../Provider/Authprovider';
import { Helmet } from 'react-helmet-async';

const Forgot = () => {
    const {handleForgot} = useContext(authContext)

    const handleForgetPassword = (e) => {
        e.preventDefault()
        const email = e.target.email.value;

        handleForgot(email)
        .then(result => {
            // console.log(result.user)
        })
        .catch(error => {
            // console.log(error)
        })

    }

    return (
        <div className='py-10 flex justify-center'>
            <Helmet>
                <title>Forgot-Password</title>
            </Helmet>
           <div className="card bg-base-100 w-full max-w-lg border-2 shrink-0 p-10">
            <h2 className='text-2xl font-semibold text-center'>Forgot Password</h2>
            <form onSubmit={handleForgetPassword} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                <div className="form-control mt-6 space-y-3">   
                <button className="btn rounded-full bg-[#112A46] text-white">Login</button>
                </div>
            </form>
            </div>   
        </div>
    );
};

export default Forgot;