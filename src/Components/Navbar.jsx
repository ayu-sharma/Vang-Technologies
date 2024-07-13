"use client";
import React, { useState, useRef, useEffect  } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({handleNavOptionClick, selectedOption, option}) {
const [isOpen, setIsOpen] = useState(false)
const [active, setActive] = useState("home")

const toggleHamburger = () => {
  setIsOpen(!isOpen);
}
const handleOptionClick = (option) => {
  handleNavOptionClick(option);
  setActive(option); 
  toggleHamburger(); 
  setIsOpen();
};


  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg px-7 lg:px-16" style={{ zIndex: 1000, position: 'fixed', width: '100%' }}>
      <div className="container-fluid justify-between gap-1">
    {/* <div classNameName='py-6 px-16 bg-[#white] top-0 left-0 z-50 shadow' style={{ width: '100%' }}> */}
    <a className="navbar-brand lg:text-3xl text-xl font-semibold justify-center items-center lg:mx-10 md:mr-10" href="#">
        <img src="/Images/company-logo.svg" alt height="80" width="80"/>
    </a>
      <div classNameName='lg:hidden flex justify-end'>
      <button onClick={toggleHamburger} className= "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
</div>
<div className={`navbar-collapse transform transition-transform duration-300 ease-in-out mx-auto justify-between  ${isOpen ? "block": "hidden"}`} id="navbarSupportedContent">
<ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active"  style={{fontSize: "20px"}} aria-current="page" href="#" onClick={() => handleOptionClick("home")}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{fontSize: "20px"}} href="#" onClick={() => handleOptionClick("about")}>About Us</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" style={{fontSize: "20px"}} href="#" onClick={() => handleOptionClick("products")}>Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{fontSize: "20px"}} href="#" onClick={() => handleOptionClick("costumers")}>
            Costumers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{fontSize: "20px"}} href="#" onClick={() => handleOptionClick("contact")}>
            Contact Us
          </a>
        </li>
      </ul>

</div>

      
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;
