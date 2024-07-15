import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarousalPage({images, interval = 2000, controls = false, fade = true}) {
  return (
    <div>
      <Carousel fade={fade} controls={controls} interval={interval}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image.src} alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  )
}

export default CarousalPage