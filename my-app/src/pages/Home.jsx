import React from 'react'
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Home  = () => {
  return (
    <div className='hpg' >
        
         <div style={{backgroundColor:'pink'}}>

          <h1>
            Welcome To Solo Sparks
          </h1>
</div>
           <div className='hft'>
                         <FaTwitter size={30} />
                         <FaYoutube size={30} />
                         <FaInstagram size={30} />
                         <FaLinkedin size={30} />
              </div>

    </div>
     
     

  )
}

export default Home 