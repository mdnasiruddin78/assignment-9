import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Provider/Authprovider';
import userImg from '../assets/user.png';
import { HiMenuAlt1 } from 'react-icons/hi';


const Navbar = () => {

    const {user,logoutUser} = useContext(authContext)

    return (
        <div className='flex justify-between items-center backdrop-blur bg-white/10 py-3 px-6'>
            <div>
                <h3 className='text-xl font-bold text-[#112A46] hidden lg:flex md:flex'>Winter-Adventure</h3>
                <div className="dropdown lg:hidden md:hidden flex">
                    <div tabIndex={0} role="button"><HiMenuAlt1 className='text-3xl'/></div>
                    <ul tabIndex={0} className="dropdown-content menu backdrop-blur bg-white/30 font-bold rounded-box z-[1] w-40 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
                        <li><NavLink to="/UserProfile">My Profile</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='space-x-5 font-bold text-[#112A46] hidden lg:flex'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/updateProfile">Update Profile</NavLink>
                <NavLink to="/UserProfile">My Profile</NavLink>
            </div>
            <div className='flex justify-between items-center space-x-2'>
                <div>
                    {
                        user ? <div className='tooltip tooltip-left' data-tip={`${user?.displayName}`}><img className='w-12 rounded-full' src={user?.photoURL} alt="" /></div> : <img className='rounded-full' src={userImg} alt="" />
                    }
                </div>
                {
                    user && user.email ? <button onClick={logoutUser} className='btn px-7 rounded-full bg-[#112A46] text-white'>LogOut</button> : <Link to="/login" className='btn px-7 rounded-full bg-[#112A46] text-white'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;