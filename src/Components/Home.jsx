import React from 'react'
import CarousalPage from './CarousalPage'
import Statistics from './Statistics'

function Home({t}) {
  const images = [ { src: '/Images/home-page-1.png', alt: '1' },
    { src: '/Images/home-page-2.png', alt: '2' },
    { src: '/Images/home-page-3.png', alt: '3' },
    { src: '/Images/home-page-4.png', alt: '4' },]
  return (
    <>
   <section className="text-gray-600 body-font">
        {/* <img className="min-h-screen mb-10 object-cover object-center" alt="hero" src="/Images/home-page-1.svg" /> */}
        <div className="mb-10">
          <CarousalPage className="" images={images}/>
        </div>
        <div className="container flex pb-4 pt-18 py-6 items-center justify-center flex-col">
          <div className="lg:w-2/3 mx-auto w-full lg:px-5 px-4">
            <h1 className="title-font lg:text-4xl text-3xl mb-4 font-medium text-black">Vang Technologies</h1>
            <div className="mb-8 leading-relaxed">
            VANG Technologies specializes in tailored software solutions for the hospitality industry, including Front Office Management, Point of Sale, Inventory Management, and MRP Management software. Our products streamline operations and enhance efficiency across sectors. We prioritize understanding our customers' needs to deliver efficient solutions that foster growth. Our services, such as Door Lock Integration, Power Automation Integration, and Third Party Integration, complement our product offerings, ensuring comprehensive solutions for our clients. Our customer-centric approach and deep industry understanding have made us a trusted partner in hospitality. We optimize operations, empower business growth, and aim to set new benchmarks with quality, innovation, and customer satisfaction.
            </div>
          </div>
        </div>
      </section>
            <Statistics/>
    </>
  )
}

export default Home