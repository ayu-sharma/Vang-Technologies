import React from 'react'
import costumers from './Costumersarray'
function Costumers() {
  return (
    <div>
       <section className='text-gray-600 body-font py-24'>
        <div className='lg:mx-16 mx-7'>
            <p className='lg:text-4xl text-3xl font-bold mb-11'>
                Our Costumers
            </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:place-items-center'>
            {costumers.map((costumers)=>(
            <div className='flex flex-col flex-wrap p-3 border rounded-lg md:justify-center md:items-center'>
             <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={costumers.img}/>
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-2 lg:h-12">{costumers.name}</h2>
            </div>))}
        </div>
        </div>
        <div className='relative'>
          <img className='absolute right-96' src="/Images/arrow.svg" alt="arrow" />
        <p className='font-bold absolute top-7 right-24'>
                And 200 more hotels and restaurant
            </p>
            </div>
       </section>
    </div>
  )
}

export default Costumers