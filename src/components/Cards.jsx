import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {

    const {ID,AdventureTitle,Image} = card;

    return (
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
            <div className="px-10 pt-10">
                <img
                src={Image}
                alt="image"
                className="rounded-xl" />
            </div>
            <div className="card-body items-center text-center">
            <h2 className="card-title text-center font-bold text-2xl">{AdventureTitle}</h2>
                <div className='text-gray-500'>
                    {
                        card.EcoFriendlyFeatures.map((e,idx) => <ul key={idx}><li>{e}</li></ul>)
                    }
                </div>
                <div className="card-actions">
                <Link to={`/adventureDetail/${ID}`} className='btn px-7 rounded-full bg-[#112A46] text-white'>Explore Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;