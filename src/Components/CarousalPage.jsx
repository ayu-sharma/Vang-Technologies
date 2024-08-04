import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarousalPage({ images, interval = 2000, controls = false, fade = true }) {
  return (
    <div>
      <Carousel fade={fade} controls={controls} indicators={false} interval={interval}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image.src} alt={image.alt} width="100%" height="100%" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarousalPage;