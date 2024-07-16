import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer class="text-gray-600 bg-gray-100 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src="/Images/company-logo.svg" alt="footer image" height="80" width="80"/>
      </a>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-start">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
        <nav class="list-none flex flex-col items-start">
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Vang Technologies Pvt. Ltd.</p>
          </li> 
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>#1,2,3 Gandhinagar</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Bangalore</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Karnataka</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>India-560009</p>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-start">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUERIES</h2>
        <nav class="list-none flex flex-col items-start mb-10">
        <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>For Product related queries</p>
          </li> 
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Please feel free to contact:</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Arun Sharma: 9380078320</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>or mail us on:</p>
          </li>
          <li>
            <a href='#' class="text-gray-600 text-xs text-decoration-none hover:text-gray-800" style={{margin:"2px"}}>info@vangtechnologies.in</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-start">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">OUR PRODUCTS</h2>
        <nav class="list-none flex flex-col items-start mb-10">
        <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Front Office Management</p>
          </li> 
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Point of Sale</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Inventory Management</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>MRP Management software</p>
          </li>
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm my-3">OUR SERVICES</h2>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Door Lock Integration</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Power automation integration</p>
          </li>
          <li>
            <p class="text-gray-600 text-xs hover:text-gray-800" style={{margin:"2px"}}>Third party integration</p>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col items-start">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US ON</h2>
        <nav class="list-none flex flex-col items-start mb-10">
        <FaFacebookSquare className='cursor-pointer' />
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2024 Vang Technologies — @Vang-Technologies
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@Vang-technologies</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a href='#' class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href='#' class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href='#' class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href='#' class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer