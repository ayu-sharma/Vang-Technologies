import React from 'react'

function About() {
  return (
    <div className='pt-24'>
        <div className='mb-16'>
            <img className="w-full" src='/Images/about-us.svg'  alt='about us' width='100%' height='100%'/>
            <div className='max-w-lg mx-auto'>
            <p className='text-3xl pt-16 font-bold'>About Us</p>
            <p className=''>VANG Technologies specializes in tailored software solutions for the hospitality industry, including Front Office systems, Point of <br/> Sale solutions, HR Management software, Inventory Management,<br/> MRP Billing, and Bar Retail Software. Our products streamline operations and enhance efficiency across sectors. We prioritize understanding our customers' needs to deliver efficient solutions that foster growth. Our customer-centric approach and deep industry understanding have made us a trusted partner in hospitality. We optimize operations, empower business growth, and aim to set new benchmarks with quality, innovation, and customer satisfaction.</p>
            </div>
    </div>
    <div className='bg-[#eeeff1] py-20 px-16 mb-16'>
        <p className='text-4xl text-bold'>Fast Facts</p>
        <div className=''>

        </div>
    </div>
    <div className='py-20 mb-16 px-16'>
    <p className='text-3xl py-16 font-bold'>Founders</p>
    <div className='grid lg:grid-cols-2'>
        
        <img src='' alt='Happy Sharma' width="" height=""/>
        <img src='' alt='Kiran V Gowda' width="" height=""/>
        </div>
        </div>
    </div>

  )
}

export default About