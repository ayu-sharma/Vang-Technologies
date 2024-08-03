import React from 'react'
import Productinfo from './Displayproductarray'
import { useParams } from 'react-router-dom';
function Displayproduct() {
    const { productId } = useParams();
  const product = Productinfo.find(item => item.id === productId);
  const borderIds = [1,2];
  return (
    <div>
        <section class="text-gray-600 body-font pt-20 lg:pt-0">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full md:mb-16 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-black lg:w-1/3 lg:mb-0 mb-4">{product.title}</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">{product.content}</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      {/* <div className='grid md:grid-cols-2 place-items-center w-full'> */}
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="object-center" src={product.img1}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={product.img2}/>
        </div>
      </div>
      {/* </div> */}
      <div className={`w-full ${borderIds.includes(Number(productId)) ? "border rounded-lg md:p-2 md:mx-3 p-2 mt-6" : ""}`}>
      <div className='mx-auto leading-relaxed text-base'>
        {product.services}
      </div>
      <div className='mt-9 text-lg font-bold'>
        {product.service1title}
  </div>
  <div className='mt-1 text-sm font-light'>
    {product.service1subtitle}
</div>
<div className='mt-9 text-lg font-bold'>
        {product.service2title}
  </div>
  <div className='mt-1 text-sm font-light'>
    {product.service2subtitle}
</div>
<div className='mt-9 text-lg font-bold'>
        {product.service3title}
  </div>
  <div className='mt-1 text-sm font-light'>
    {product.service3subtitle}
</div>
<div className='mt-9 text-lg font-bold'>
        {product.service4title}
  </div>
  <div className='mt-1 text-sm font-light'>
    {product.service4subtitle}
</div>
</div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Displayproduct