import React from 'react';
import hotel from '../assets/gydps-exterior-12.jpg';
import 'animate.css';
import './Contract.css';


const Contract = () => {
    
    return (
        <div className='border-2 p-5 rounded-xl'>
            <div className='flex justify-center'>
                <h2 className='text-4xl font-bold bounce'>Contact Us</h2>
            </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
            <div className='text-2xl font-bold'>
                <p>Company Name : Winter-Adventure</p>
                <p>Website : www.ECO.com</p>
                <p>Email : ecoadvnture@gmail.com</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1879891.287135614!2d88.74415573631923!3d23.0361548087954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c792d6c18ef3%3A0xdcb3558e146f08e1!2sBangladesh%20Eco%20Adventure!5e0!3m2!1sen!2sbd!4v1732023140747!5m2!1sen!2sbd" width="400" height="300" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='responsive google map'></iframe>
            </div>
            <div className='space-y-4'>
            <h3 className='text-2xl text-center font-bold'>Our Hotel</h3>
                <div className='flex justify-center'>
                    <img className='w-80 h-60 rounded-xl' src={hotel} alt="" />
                </div>
                <h3 className='text-2xl font-bold text-center'>Send Your Email</h3>
                <div className='flex justify-center'>
                    <input type="email" placeholder="Type your email" className="input input-bordered w-full max-w-xs" />
                    <button className='btn px-7 rounded-r-xl bg-[#112A46] text-white'>Send</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contract;