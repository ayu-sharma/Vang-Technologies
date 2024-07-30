import React from 'react'
import Testimonial from './Testimonial';
import Funfacts from './Funfacts';

function About() {
  return (
    <div className='antialiased text-gray-600'>
        <div className='mb-16'>
            <img src='/Images/about-us.svg' className=''  alt='about us' width='100%' height='100%'/>
            <div className='lg:max-w-xl mx-auto lg:px-6 px-10'>
            <p className='text-4xl pt-16 font-bold text-black'>About Us</p>
            <p className=''>VANG Technologies is a leading provider of customized software solutions for the hospitality industry. Our expertise includes Front Office systems, Point of Sale solutions, Inventory Management, MRP Billing, and Bar Retail Software. Designed to streamline operations and enhance efficiency, our products are crafted to meet the diverse needs of our clients.

We prioritize understanding our customers' unique requirements to deliver effective solutions that foster growth and success. Our customer-centric approach and deep industry knowledge have established us as a trusted partner in the hospitality sector. At VANG Technologies, we are committed to optimizing operations, empowering business growth, and setting new benchmarks in quality, innovation, and customer satisfaction.</p>
            </div>
    </div>
    <div className='bg-[#eeeff1] py-16 my-24 px-7 mb-16'>
    <p className='text-4xl px-16 pb-4 text-bold cs:text-center'>Fast Facts</p>
       <Funfacts/>
    </div>
    <div className='py-10 lg:px-16'>
    <p className='text-4xl pb-8 pt-16 text-bold cs:text-center'>Testimonials</p>
        <div className='mx-3'>
    <Testimonial/>
    </div>
    </div>
    </div>

  )
}

export default About

        