import React from 'react'
import fact from './Fact'
import Testimonial from './Testimonial';
function About() {
  return (
    <div className='pt-24'>
        <div className='mb-16'>
            <img className="" src='/Images/about-us.svg'  alt='about us' width='100%' height='100%'/>
            <div className='max-w-lg mx-auto px-6'>
            <p className='text-3xl pt-16 font-bold'>About Us</p>
            <p className=''>VANG Technologies specializes in tailored software solutions for the hospitality industry, including Front Office systems, Point of <br/> Sale solutions, HR Management software, Inventory Management,<br/> MRP Billing, and Bar Retail Software. Our products streamline operations and enhance efficiency across sectors. We prioritize understanding our customers' needs to deliver efficient solutions that foster growth. Our customer-centric approach and deep industry understanding have made us a trusted partner in hospitality. We optimize operations, empower business growth, and aim to set new benchmarks with quality, innovation, and customer satisfaction.</p>
            </div>
    </div>
    <div className='bg-[#eeeff1] py-20 px-16 mb-16'>
        <p className='text-4xl text-bold'>Fast Facts</p>
        <div className='py-16 px-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {fact.map((item) => {
    return (

      <div className='bg-white py-10 px-7 rounded-lg' key={item.id}>
       <div className='text-3xl font-bold pb-2'> {item.title}</div>
       <div className='text-normal pb-6'> {item.subtitle}</div>
       <div className='text-sm pt-6 text-gray-400'>{item.smalltitle}</div>
      </div>

    );
  })}
        </div>
    </div>
    <div className='py-20 mb-16 px-16'>
    <p className='text-4xl py-16 text-bold'>Testimonials</p>
    <Testimonial/>
        </div>
    </div>

  )
}

export default About