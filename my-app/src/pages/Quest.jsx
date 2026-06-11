import React from 'react'
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import ig7 from '../assets/ig7.png.png'
import ig3 from '../assets/ig3.png.png'
import ig4 from '../assets/ig4.png.png'
import ig5 from '../assets/ig5.png.png'
import ig6 from '../assets/ig6.png.png'
import { Link } from 'react-router-dom'


const Quest = () => {
  const [value, setValue] = useState('none');
      const progressValues = {
          onehour: 100,
          halfhour: 80,
          lessthanhalfhour: 40,
          none: 10,
      };
  
      const handleChange = (event) => {
          setValue(event.target.value);
      };
  return (
    <div>
        

        <div className='qsbr'>
       <h1>Personalized Daily Quests</h1>
           <select value={value} onChange={handleChange} className='qsb'>
                <option value="onehour">1 Hour workout</option>
                <option value="halfhour">30 Minutes</option>
                <option value="lessthanhalfhour">Less than 30 minutes</option>
                <option value="none">Today No workout</option>
            </select>
            <div style={{ width: '40%', backgroundColor: '#e0e0df', borderRadius: '5px', marginTop: '10px' }} className='qpg'>
                <div
                    style={{
                        width: `${progressValues[value]}%`,
                        height: '20px',
                        backgroundColor: value === 'onehour' ? 'green' : value === 'halfhour' ? 'blue' : value === 'lessthanhalfhour' ? 'orange' : 'red',
                        borderRadius: '5px',
                    }}
                />
            </div>
                        <img src={ig7} alt="" className='ig7' />

                     <Link to='/Questtest'>   <button className='quest-test'>Start Quest</button> </Link>  

            </div>
             

             <div className='medi'>
                       <ul>
                        <li>Morning Meditation</li>
                        <li>context: Start your day with a clear mind.</li>
                        <li>instructions: Spend 10 minutes meditating in a quiet space.</li>
                       </ul>
                       <img src={ig3} alt="" />
             </div>

             <div className='wtr'>
               <ul>

                <li>Drink Water</li>
                <li>Refresh your body and stay energized</li>
                <li>Drink a full glass of water mindfully</li>

               </ul>
               <img src={ig4} alt="" />
             </div>

             <div className='bk'>
               <ul>

                <li>Read a Chapter</li>
                <li>context: Expand your knowledge and relax.</li>
                <li>instructions: Read one chapter from your favorite book.</li>

               </ul>
               <img src={ig5} alt="" />
             </div>

             <div className='wkg'>
               <ul>

                <li>Evening Walk</li>
                <li>Reflect on your day and enjoy nature.</li>
                <li>Take a 30-minute walk in your neighborhood.</li>

               </ul>
               <img src={ig6} alt="" />
             </div>
              <div className='qftr'>
               <FaTwitter size={30} />
               <FaYoutube size={30} />
               <FaInstagram size={30} />
               <FaLinkedin size={30} />
               </div>
      </div>
  )
}

export default Quest