import React from 'react';
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import logo from '../assets/DALL·E 2024-11-19 14.22.49 - A logo design for a winter-themed eco-adventure experience. The design features a snow-covered mountain with evergreen trees and a winding icy trail l.webp';


const Footer = () => {
    return (
        <footer className="lg:flex md:flex justify-around bg-black text-white p-10 text-center">
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">GO-TO</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Update Profile</a>
                <a className="link link-hover">User Profile</a>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">INFORMATION</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">See photo</a>
                <a className="link link-hover"></a>
            </nav>
            <nav className='flex flex-col space-y-3'>
                <h6 className="footer-title text-xl">social profiles</h6>
                <div className='flex justify-center space-x-3 cursor-pointer'>
                    <div>
                        <img className='w-28 rounded-xl' src={logo} alt="" />
                        <p className=''>www.ECO.com</p>
                    </div>
                    <div className='space-y-3 text-4xl'>
                        <FaSquareFacebook className='text-blue-500'/>
                        <FaSquareXTwitter/>
                        <SiInstagram className='text-red-500'/>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;