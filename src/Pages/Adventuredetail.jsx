import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLocationDot } from 'react-icons/fa6';
import { MdAccessTimeFilled } from 'react-icons/md';
import { VscSymbolMethod } from 'react-icons/vsc';
import { useLoaderData, useParams } from 'react-router-dom';
import support from '../assets/download.png';

const Adventuredetail = () => {

    const data = useLoaderData()
    const {ID} = useParams()
    const details = data.find(detail => detail.ID == ID)

    const {MaxGroupSize,AdventureLevel,Duration,Location,BookingAvailability,AdventureCost,ShortDescription,CategoryName,Image,AdventureTitle} = details;

    // Function to check if current time is within the range
    const isCurrentTimeWithinRange = (startHour, startMinute, endHour, endMinute) => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
  
      const isAfterStart = currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute);
      const isBeforeEnd = currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute);
  
      return isAfterStart && isBeforeEnd;
    };
  
    // Handle button click
    const handleTalkWithExpert = () => {
      const withinTime = isCurrentTimeWithinRange(10, 0, 20, 0); // 10:00 AM to 8:00 PM
  
      if (withinTime) {
        // Open Google Meet in a new tab
        window.open('https://meet.google.com/zsx-xbto-rpp', '_blank');
      } else {
        document.getElementById('my_modal_1').showModal()
      }
    };

    return (
        <div className="card shadow-xl">
          <Helmet>
            <title>Adventure-Details</title>
          </Helmet>
            <figure>
                <img className='rounded-xl'
                src={Image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='lg:flex lg:justify-between'>
                    <div className='space-y-4'>
                        <h2 className="card-title text-xl"><span className='font-bold'>Adventure Title:</span> {AdventureTitle}</h2>
                        <p className='text-xl'><span className='font-bold'>Description:</span> {ShortDescription}</p>
                        <p className='text-xl'><span className='font-bold'>Booking Availability:</span> {BookingAvailability}</p>
                        <p className='text-xl'><span className='font-bold flex items-center'><MdAccessTimeFilled />Duration:</span> {Duration}</p>
                        <p className='text-xl'><span className='font-bold'>GroupSize:</span> {MaxGroupSize}</p>
                        <p className='text-xl'><span className='font-bold'>Category Name:</span> {CategoryName}</p>
                        <p className='text-xl'><span className='font-bold'>Eco-Friendly Features:</span> {details.EcoFriendlyFeatures.map(e => <ul><li className='flex items-center'><VscSymbolMethod />{e}</li></ul>)}</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-xl'><span className='font-bold flex items-center'><FaLocationDot />Location: </span> {Location}</p>
                        <p className='text-xl'><span className='font-bold'>Cost: </span> {AdventureCost}$</p>
                        <p className='text-xl'><span className='font-bold'>Level:</span> {AdventureLevel}</p>
                        <p className='text-xl'><span className='font-bold'>Included Items:</span> {details.IncludedItems.map(e => <ul><li className='flex items-center'><VscSymbolMethod />{e}</li></ul>)}</p>
                        <p className='text-xl'><span className='font-bold'>Special Instructions:</span> {details.SpecialInstructions.map(e => <ul><li className='flex items-center'><VscSymbolMethod />{e}</li></ul>)}</p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                <button onClick={handleTalkWithExpert} className='btn px-7 rounded-full bg-[#112A46] text-white'>Talk with Expert</button>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
              <dialog id="my_modal_1" className="modal backdrop-blur bg-white/10">
                <div className="modal-box">
                  <div className='flex justify-center'>
                    <img src={support} alt="" />
                  </div>
                  <h3 className="text-3xl font-bold text-center text-orange-400">No Support Available Now</h3>
                 <div className='space-y-3'>
                 <p className="text-center font-bold text-[#1E441A]">Daily Support Time</p>
                  <div className='flex justify-center'>
                      <p className='bg-gray-300 p-2 font-bold'>Morning:10.00AM To Night:8.00PM</p>
                  </div>
                  <div className="flex justify-center">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn px-5 rounded-xl bg-[#112A46] text-white">Close</button>
                    </form>
                  </div>
                 </div>
                </div>
            </dialog>
        </div>
    );
};

export default Adventuredetail;