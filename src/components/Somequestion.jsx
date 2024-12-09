import React, { useEffect } from 'react';
import image from '../assets/horseback-riding.jpg';


const Somequestion = () => {

    return (
        <div>
            <h2 className='text-3xl text-center font-bold mb-3'>F.A.Q Qusestion</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 space-x-4'>
        <div className='lg:col-span-5'>
                <img className='rounded-xl' src={image} alt="" />
            </div>
            <div className='lg:col-span-5 space-y-5'>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">what is new in out winter Resort ?</div>
                <div className="collapse-content">
                    <p>rolaer-coster,ball-playing,sky-driving.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">how days the trip in this winter ?</div>
                <div className="collapse-content">
                    <p>20 days in this month for winter session.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">our popularity ?</div>
                <div className="collapse-content">
                    <p>every winter session in out land is very famous in this trip.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">what the upcamming event in this winter session ?</div>
                <div className="collapse-content">
                    <p>camp-fire place,paragliding,snoo-world etc.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">our service ?</div>
                <div className="collapse-content">
                    <p>we are try to best service in out tourist people.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Somequestion;