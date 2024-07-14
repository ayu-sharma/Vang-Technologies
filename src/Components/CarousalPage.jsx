import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarousalPage() {
  return (
    <div>
      <Carousel fade controls={false} interval={2000}>
      <Carousel.Item>
      <img src='/Images/home-page-1.svg' alt='1' />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/Images/home-page-2.svg' alt='2' />
      </Carousel.Item>
      <Carousel.Item>
      <img src='/Images/home-page-3.svg' alt='3' />
      </Carousel.Item>
      <Carousel.Item>
      <img src='/Images/home-page-4.svg' alt='4' />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarousalPage