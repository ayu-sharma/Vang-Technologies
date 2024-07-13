import React from 'react'

function Home() {
  return (
    <>
    <div className=''>
    <div className='lg:grid py-24 lg:grid-cols-2 lg:px-16 px-7 gap-10 items-center mx-auto flex flex-col-reverse '>

        <div className='lg:text-sm text-xs'>
        <span className="pt-5">
          At our company, we specialize in providing comprehensive IT solutions tailored for Windows-based, web-based, and mobile platforms. Our mission is to exceed client expectations with innovative and cost-effective software solutions. With expertise in both offline and online business solutions, our development team excels in delivering exceptional results, prioritizing productivity and cost-efficiency to maintain competitiveness in the industry.
        </span>
        <br />
        <span className="pt-5">
          In recent years, we've significantly impacted the hospitality industry, becoming a go-to provider for all hospitality-related software needs. Our reputation for reliability and excellence is built on our ability to deliver high-quality products within stringent deadlines. We understand the critical importance of time in business operations and consistently strive to meet our commitments promptly.
        </span>
        <br />
        <span className="pt-5">
          Our journey is driven by a vision to support clients in effectively developing their businesses. We recognize that each client has unique needs and offer customized solutions tailored specifically to those requirements. Staying at the forefront of technological advancements, our team continually updates their skills and knowledge to stay ahead in the rapidly evolving IT landscape.
        </span>
        <br />
        <span className="pt-5">
          A core strength lies in seamlessly delivering both offline and online solutions that optimize internal processes, improve operational efficiency, and ensure data security. Committed to providing affordable, high-quality software, we serve a wide range of clients, enhancing their operational capabilities and customer experiences, particularly in the hospitality sector.
        </span>
        <br />
        <span className="pt-5">
          In conclusion, we are more than a software development company; we are dedicated partners in our clients' success. Through innovation, cost-effectiveness, and unwavering client satisfaction, we set new benchmarks in the IT industry, striving to exceed expectations and drive business growth.
        </span>

    </div>
    <div className=''>
        <img className='rounded-lg' src='/Images/home-page.svg' alt='home Image' width="800" height="800"/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home