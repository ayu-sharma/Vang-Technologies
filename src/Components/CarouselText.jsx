// src/Components/Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import fact from "./Fact";


const Carousel = () => {

  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        {fact.map((item) => {
    return (

      <div className='bg-white py-10 px-7 rounded-lg' key={item.id}>
       <div className='text-3xl font-bold pb-2'> {item.title}</div>
       <div className='text-normal pb-6'> {item.subtitle}</div>
       <div className='text-sm pt-6 text-gray-400'>{item.smalltitle}</div>
      </div>

    );
  })}
      </Swiper>
  );
};

export default Carousel;
