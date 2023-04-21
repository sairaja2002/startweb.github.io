import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

import ReactDOM from 'react-dom/client';
import logo from './logo.jpg'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const [menu, setmenu] = useState(false)
  const handleClick = () => {
    setmenu(!menu)
  }
  return (
    <div>
      
      <div className="header ">
      <nav className='NavbarItems container-fluid'>
        <h1 className='logo'>
          <img src={logo} alt="" /> <span>ThereJobs</span>
        </h1>
        <div className="menuicons" onClick={handleClick} >
          {menu ?
            <i class="fa-solid fa-xmark"></i>
            :
            <i class="fa-solid fa-bars"></i>

          }
        </div>
        <ul className={`nav-menu  ${menu && 'active'}`}>
            <li><Link to="/" className='nav-link'><i class="fa-solid fa-house"></i> Home</Link></li>
            
            <li><Link to="/register" className='nav-link'><i class="fa-solid fa-book"></i> Register</Link></li>
            <li className='btn' id='myprem'><Link to="/subscription" id='subscribe'><i class="fa-regular fa-star"></i>Premium</Link></li>
            <li><Link to="/login" className='btn nav-link' id='login'>Login <i class="fa-solid fa-right-to-bracket"></i></Link></li>
            <li><Link className='nav-link1'><i class="fa-solid fa-bell" style={{color: "#ffffff", fontSize: "1.5rem", cursor: "pointer"}}></i></Link></li>
            <li><Link to= "/dashboard"><i class="fa-solid fa-user" style={{color: "#ffffff", fontSize: "1.5rem", cursor: "pointer"}}></i></Link></li>
          </ul>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
