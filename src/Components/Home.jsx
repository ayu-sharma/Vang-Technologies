import React from 'react'
import CarousalPage from './CarousalPage'
import Statistics from './Statistics'
import Displayproduct from './Displayproduct'

function Home() {
  const images = [ { src: '/Images/home-page-1.svg', alt: '1' },
    { src: '/Images/home-page-2.svg', alt: '2' },
    { src: '/Images/home-page-3.svg', alt: '3' },
    { src: '/Images/home-page-4.svg', alt: '4' },]
  return (
    <>
   <section className="text-gray-600 body-font">
        {/* <img className="min-h-screen mb-10 object-cover object-center" alt="hero" src="/Images/home-page-1.svg" /> */}
        <div className="mb-10">
          <CarousalPage images={images}/>
        </div>
        <div className="container flex pb-4 pt-18 items-center justify-center flex-col">
          <div className="lg:w-2/3 mx-auto w-full lg:px-5 px-4">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Vang Technologies</h1>
            <div className="mb-8 leading-relaxed">
              At our company, we provide comprehensive IT solutions for Windows-based, web-based, and mobile platforms. Our mission is to exceed client expectations with innovative, cost-effective software. Specializing in both offline and online business solutions, we excel in productivity and cost-efficiency. We've significantly impacted the hospitality industry, known for delivering high-quality products within stringent deadlines. Our customized solutions meet unique client needs, and we stay ahead with the latest technology. Committed to affordable, high-quality software, we optimize internal processes, improve efficiency, and ensure data security, serving as dedicated partners in our clients' success.
            </div>
          </div>
        </div>
            <Statistics/>
      </section>
    </>
  )
}

export default Home