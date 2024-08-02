"use client";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// const languages = [
//   { value: "en", text: "en" },
//   { value: "kn", text: "kn" },
//   { value: "te", text: "te" },
// ];
function ResponsiveAppBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  }

//   const handleChange = (e) => {
//     setLang(e.target.value);
//     let loc = "http://localhost:3000/";
//     window.location.replace(
//         loc + "?lng=" + e.target.value
//     );
// };
  // Function to close the hamburger menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  }
  const ScreenNav = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;

  @media (min-width: 1024px) {
    // Your styles for screens larger than 800px go here
  z-index: 1000;
  position: relative;
  }
`;



  return (
    <ScreenNav>
    <nav className={`navbar navbar-light bg-light navbar-expand-md px-7 md:px-16 w-full`}>
      <div className="container-fluid justify-between gap-1">
        <Link to="/" className={`navbar-brand md:text-3xl font-semibold justify-center items-center md:mx-10 md:mr-10`} >
          <img src="/Images/company-logo.svg" alt="navbar" height="60" width="60" />
        </Link>
        <div className='md:hidden'>
        <button onClick={toggleHamburger} className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 top-6 right-6">
            {/* <div className={`w-full h-0.5 bg-black ${isOpen ? 'rotate-45 translate-y-1.5': ''}`}></div>
            <div className={`w-full h-0.5 bg-black ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-black ${isOpen ? '-rotate-45 -translate-y-1.5 ease-out duration-[0.53s]' : ''}`}></div> */}
            <div className={`w-full h-0.5 bg-black ${isOpen ? 'animate-openTop' : 'animate-closeTop'}`}></div>
              <div className={`w-full h-0.5 bg-black ${isOpen ? 'animate-openMiddle' : 'animate-closeMiddle'}`}></div>
              <div className={`w-full h-0.5 bg-black ${isOpen ? 'animate-openBottom' : 'animate-closeBottom'}`}></div>
          </button>
        </div>
        <div className={`navbar-collapse mx-auto justify-between ${isOpen ? "block" : "hidden"}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link active cursor-pointer rounded md:rounded-none md:px-0 md:p-0 md:mb-0 mb-3"  style={{ fontSize: "12px" }} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer md:px-0 md:py-2 md:mb-0 mb-3" style={{ fontSize: "12px" }} to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer md:px-0 md:py-2 md:mb-0 mb-3" style={{ fontSize: "12px" }} to="/products">Our Products</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer md:px-0 md:py-2  md:mb-0 mb-3" style={{ fontSize: "12px" }} to="/costumers">Our Costumers</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer md:px-0 md:py-2 md:mb-0 mb-3" style={{ fontSize: "12px" }} to="/contact">Contact Us</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    </ScreenNav>
  );
}

export default ResponsiveAppBar;
