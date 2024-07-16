import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <footer class="text-gray-600 bg-gray-100 body-font">
  <div class="container lg:px-5 py-24  mx-auto">
    <div class="flex justify-between">
    <div class="lg:w-1/4 md:w-1/2 w-full lg:px-4 flex flex-col items-start">
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
            <a href='mailto:info@vangtechnologies.in' class="text-gray-600 text-xs text-decoration-none hover:text-gray-800" style={{margin:"2px"}}>info@vangtechnologies.in</a>
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
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src='/Images/company-logo.svg' alt='footercompanylogo' height={60} width={60}/>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Vang Technologies —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@vangtechnologies</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer