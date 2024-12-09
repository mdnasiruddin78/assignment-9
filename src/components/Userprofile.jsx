import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { authContext } from '../Provider/Authprovider';
import { Link } from 'react-router-dom';

const Userprofile = () => {

    const {user} = useContext(authContext)

    return (
        <div className='py-10'>
            <Helmet>
                <title>User-Profile</title>
            </Helmet>
            <h2 className='text-center text-4xl font-bold mb-3'>Welcome To {user?.displayName} Profile</h2>
               <div className='flex justify-center'>
                    <img className='w-60 rounded-xl' src={user?.photoURL} alt="" />
               </div>
                <div className='text-center text-3xl space-y-3'>
                    <h3><span className='font-bold'>Name:</span> {user?.displayName}</h3>
                    <p><span className='font-bold'>Email:</span> {user?.email}</p>
            </div>
            <div className='flex justify-center mt-3'>
                <Link to="/updateProfile" className='btn px-7 rounded-full bg-[#112A46] text-white'>Update Profile</Link>
            </div>
        </div>
    );
};

export default Userprofile;