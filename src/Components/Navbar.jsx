"use client";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// const languages = [
//   { value: "en", text: "en" },
//   { value: "kn", text: "kn" },
//   { value: "te", text: "te" },
// ];
function ResponsiveAppBar({t}) {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("hi");

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

  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg px-7 lg:px-16" style={{ zIndex: 1000, position: 'fixed', width: '100%' }}>
      <div className="container-fluid justify-between gap-1">
        <a className="navbar-brand lg:text-3xl font-semibold justify-center items-center lg:mx-10 md:mr-10" href="#">
          <img src="/Images/company-logo.svg" alt="navbar" height="60" width="60" />
        </a>
        <div className='lg:hidden flex justify-end'>
          <button onClick={toggleHamburger} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`navbar-collapse transform transition-transform duration-300 ease-in-out mx-auto justify-between  ${isOpen ? "block" : "hidden"}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link active cursor-pointer"  style={{ fontSize: "12px" }} aria-current="page" to="/">{t('nav_home')}</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer" style={{ fontSize: "12px" }} to="/about">{t('nav_about')}</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer" style={{ fontSize: "12px" }} to="/products">{t('nav_product')}</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer" style={{ fontSize: "12px" }} to="/costumers">{t('nav_costumer')}</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link cursor-pointer" style={{ fontSize: "12px" }} to="/contact">{t('nav_contact')}</Link>
            </li>
            <select className='bg-light' value={lang} style={{ fontSize: "12px" }} onChange={{}}>
                {/* {languages.map((item) => {
                    return (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.text}
                        </option>
                    );
                })} */}
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ResponsiveAppBar;
