import React from 'react'
import { useState } from 'react';
import ig1 from '../assets/ig1.png.png'
import ig2 from '../assets/ig2.png.png'

import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';



const Mood = () => {
   const [value, setValue] = useState('excellent');
    const progressValues = {
        excellent: 100,
        good: 80,
        bad: 40,
        veryBad: 10,
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
  return (
    <div>
          <div className='mdbr'>
            <h3> Select your current Mood </h3>
           <select value={value} onChange={handleChange} className='mdb'>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="bad">Bad</option>
                <option value="veryBad">Very Bad</option>
            </select>
            <div style={{ width: '40%', backgroundColor: '#e0e0df', borderRadius: '5px', marginTop: '10px' }} className='pg'>
                <div
                    style={{
                        width: `${progressValues[value]}%`,
                        height: '20px',
                        backgroundColor: value === 'excellent' ? 'green' : value === 'good' ? 'blue' : value === 'bad' ? 'orange' : 'red',
                        borderRadius: '5px',
                    }}
                />
            </div>

            </div>
         
               <h2 style={{marginLeft :'450px'}}>Self-care is not a luxury. It is a necessity.</h2>
               <div className='mdprs1'>
               <img src={ig1} alt="" /> <p>
                Loving yourself isn't an act of selfishness—it's an essential part of living well.
                Taking the time to care for your body, mind, and emotions allows you to show up more fully in all areas of life.
                 When you make your happiness a priority, you're not neglecting others; 
                  you're simply ensuring that you have the strength and peace to be your best self.
                   Self-care isn’t a luxury—it’s a necessity.
               </p>
               </div>
                <div className='mdprs2'>
               <img src={ig2} alt="" /> <p>
               Rest and self-care are vital, not optional. When you intentionally pause to restore your energy and nourish your spirit, 
                you create space for clarity, peace, and strength. This renewal doesn’t just benefit you—it enables you to show 
                 up for others with greater presence and compassion. Giving from a full heart is far more sustainable 
                  than giving from exhaustion.
               </p>
               </div>
               <h2 style={{marginLeft :'450px'}}>Sometimes the most productive thing you can do is rest.</h2>
               <div className='footer'>
               <FaTwitter size={30} />
               <FaYoutube size={30} />
               <FaInstagram size={30} />
               <FaLinkedin size={30} />
               </div>
    </div>
  )
}

export default Mood