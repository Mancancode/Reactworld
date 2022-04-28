import React from 'react';
import {RiMenu3lin3, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg';
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className="gpt3__navbar-link_logo">
          <img src='logo' alt='logo'/>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href='#home'>Home </a></p>
        <div>
      </div>
    </div>  
  )
}

export default Navbar