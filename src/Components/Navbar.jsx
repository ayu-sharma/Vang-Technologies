"use client";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  }

  // Function to close the hamburger menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg px-7 lg:px-16" style={{ zIndex: 1000, position: 'fixed', width: '100%' }}>
      <div className="container-fluid justify-between gap-1">
        <a className="navbar-brand lg:text-3xl text-xl font-semibold justify-center items-center lg:mx-10 md:mr-10" href="#">
          <img src="/Images/company-logo.svg" alt="navbar" height="80" width="80" />
        </a>
        <div className='lg:hidden flex justify-end'>
          <button onClick={toggleHamburger} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`navbar-collapse transform transition-transform duration-300 ease-in-out mx-auto justify-between  ${isOpen ? "block" : "hidden"}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link active cursor-pointer" style={{ fontSize: "20px" }} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer" style={{ fontSize: "20px" }} to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer" style={{ fontSize: "20px" }} to="/products">Our Products</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer" style={{ fontSize: "20px" }} to="/costumers">Costumers</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer" style={{ fontSize: "20px" }} to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ResponsiveAppBar;
