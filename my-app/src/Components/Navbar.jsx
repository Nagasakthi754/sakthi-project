import React from 'react'
import logo from '../assets/logo.png.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="" />
        <ul>
           <Link to='/'><li>Home</li></Link> 
          <Link to='/Mood'><li>Mood</li></Link>  
         <Link to='/Quest'> <li>Quest</li></Link>  
        </ul>
       <Link to='/Mood'><button >Get started</button></Link> 
       
    </div>
  )
}

export default Navbar