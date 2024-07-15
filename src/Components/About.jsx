import React from 'react'
import fact from './Fact'
import Testimonial from './Testimonial';
import CarouselComponent from './CarouselComponent';
import Funfacts from './Funfacts';

function About() {
  return (
    <div className='pt-24 antialiased'>
        <div className='mb-16'>
            <img src='/Images/about-us.svg' className=''  alt='about us' width='100%' height='100%'/>
            <div className='max-w-xl mx-auto px-6'>
            <p className='text-3xl pt-16 font-bold'>About Us</p>
            <p className=''>VANG Technologies specializes in tailored software solutions for the hospitality industry, including Front Office systems, Point of <br/> Sale solutions, HR Management software, Inventory Management,<br/> MRP Billing, and Bar Retail Software. Our products streamline operations and enhance efficiency across sectors. We prioritize understanding our customers' needs to deliver efficient solutions that foster growth. Our customer-centric approach and deep industry understanding have made us a trusted partner in hospitality. We optimize operations, empower business growth, and aim to set new benchmarks with quality, innovation, and customer satisfaction.</p>
            </div>
    </div>
    <div className='bg-[#eeeff1] py-16 my-24 px-7 mb-16'>
    <p className='text-4xl px-16 pb-4 text-bold cs:text-center'>Fast Facts</p>
       <Funfacts/>
    </div>
    <div className='py-18 mb-16 px-16'>
    <p className='text-4xl pt-16 pb-10 text-bold cs:text-center'>Testimonials</p>
    <Testimonial/>
        </div>
    </div>

  )
}

export default About

        