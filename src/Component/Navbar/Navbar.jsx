import React, { useState } from 'react'
import './Navbar.css';
import logo from '../../images/logo.svg';
import Close from '../../images/icon-close.svg';
import Hamburger from '../../images/icon-hamburger.svg';
const Navbar = () => {
    const[menu, setMenu]=useState(false)
    const Menuhandler=()=>{
        setMenu(!menu)
    }
  return (
    <div className='Nav-contain'>
        <div className='Nav-logo'>
            <img src={logo} alt="" />
        </div>
        <ul className= {menu?' mbl' : 'desktop'}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
        <button className='linear-btn'>Request Invite</button>
        <div className='Nav-icons'>
        {/* <img src={Hamburger} alt="" /> */}
       { menu ? <img onClick={Menuhandler} src={Close} alt="" />: <img onClick={Menuhandler} src={Hamburger} alt="" />}
        </div>
       
    </div>
  )
}

export default Navbar