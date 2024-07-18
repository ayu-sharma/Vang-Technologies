import React from 'react'
import CarousalPage from './CarousalPage'
import Statistics from './Statistics'

function Home({t}) {
  const images = [ { src: '/Images/home-page-1.svg', alt: '1' },
    { src: '/Images/home-page-2.svg', alt: '2' },
    { src: '/Images/home-page-3.svg', alt: '3' },
    { src: '/Images/home-page-4.svg', alt: '4' },]
  return (
    <>
   <section className="text-gray-600 body-font">
        {/* <img className="min-h-screen mb-10 object-cover object-center" alt="hero" src="/Images/home-page-1.svg" /> */}
        <div className="mb-10">
          <CarousalPage className="" images={images}/>
        </div>
        <div className="container flex pb-4 pt-18 items-center justify-center flex-col">
          <div className="lg:w-2/3 mx-auto w-full lg:px-5 px-4">
            <h1 className="title-font lg:text-4xl text-3xl mb-4 font-medium text-black">{t("home_title")}</h1>
            <div className="mb-8 leading-relaxed">
            {t("home_subtitle")}
            </div>
          </div>
        </div>
      </section>
            <Statistics/>
    </>
  )
}

export default Home