import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Adventure = () => {

    const [adventure,setAdventure] = useState([])

    useEffect(()=>{
        fetch('/winter.json')
        .then(res => res.json())
        .then(data => setAdventure(data))
    },[])

    return (
        <div>
            <h2 className='text-3xl text-[#112A46] font-bold text-center'>Adventure Experiences</h2>
            <p className='text-gray-500 text-center'>Eco-adventure experiences are adventures  combine sustainability education.it is very enjoyable gratefull.environmental volunteering opportunities. The goal eco-adventure is to nature than you found it. Here are</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    adventure.map((card,idx) => <Cards key={idx} card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default Adventure;