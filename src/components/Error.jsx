import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='max-w-6xl mx-auto flex justify-center items-center flex-col mt-[230px] space-y-3'>
            <Helmet>
                <title>ERROR-PAGE</title>
            </Helmet>
            <h3 className='text-3xl text-red-500 text-center font-bold'>PAGE NOT FOUND</h3>
            <p className='text-3xl text-red-500 text-center font-bold'>ERROR 404 STATUS</p>
            <Link to="/" className='btn px-7 rounded-full bg-[#112A46] text-white'>Back to Home</Link>
        </div>
    );
};

export default Error;