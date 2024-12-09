import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { authContext } from '../Provider/Authprovider';

const Updataprofile = () => {

    const {updateUserProfile} = useContext(authContext)

    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        const profile = {
            displayName: name,
            photoURL: photo,
        }

        updateUserProfile(profile)
        .then(()=>{
            // console.log('user profile update')
        })
        .catch(error => {
            // console.log('user profile update error')
        })
    }

    return (
        <div className='py-10 flex justify-center'>
            <Helmet>
                <title>Update-Profile</title>
            </Helmet>
            <div className="card bg-base-100 w-full max-w-lg border-2 shrink-0 p-10">
            <h2 className='text-2xl font-semibold text-center'>Update Profile</h2>
            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text" name='name' placeholder="type your name" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">photo-URL</span>
                </label>
                <input type="text" name='photo' placeholder="photo-URL" className="input input-bordered bg-[#F3F3F3]" required />
                </div>
                <div className="form-control mt-6 space-y-3">   
                <button className="btn rounded-full bg-[#112A46] text-white">Update Information</button>
                </div>
            </form>
        </div>   
    </div>
    );
};

export default Updataprofile;