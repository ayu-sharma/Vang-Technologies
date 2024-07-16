import React from 'react'
import Productarray from './Products-array'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24">
      <p className='text-4xl mb-12 font-bold'>Our Products</p>
      <div className=' mx-auto flex flex-wrap'>
    <div class="flex flex-wrap -m-4">
          {Productarray.map((item) => (
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img className='rounded-full' src={item.img} alt='pics'/>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{item.name}</h2>
            <p class="leading-relaxed text-base">{item.content}</p>
            <Link to={item.link} class="mt-3 text-indigo-500 inline-flex cursor-pointer hover:opacity-50 items-center">Know More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                {console.log(item.link)}
              </svg>
            </Link>
          </div>
        </div>
      </div>
  ))}
    </div>
  </div>
  </div>
</section>
  )
}

export default Product