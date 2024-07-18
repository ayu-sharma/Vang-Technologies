import React from 'react'
import Testimonial from './Testimonial';
import Funfacts from './Funfacts';

function About({t}) {
  return (
    <div className='antialiased text-gray-600'>
        <div className='mb-16'>
            <img src='/Images/about-us.svg' className=''  alt='about us' width='100%' height='100%'/>
            <div className='lg:max-w-xl mx-auto lg:px-6 px-10'>
            <p className='text-4xl pt-16 font-bold text-black'>{t("about_title")}</p>
            <p className=''>{t("about_subtitle")}</p>
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

        