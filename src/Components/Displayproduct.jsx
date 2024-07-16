import React from 'react'
import Productinfo from './Displayproductarray'
import { useParams } from 'react-router-dom';
function Displayproduct() {
    const { productId } = useParams();
  const product = Productinfo.find(item => item.id === productId);
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">{product.title}</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">{product.content}</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Displayproduct