import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './1.jpg';
import image2 from './1.jpg';
import image3 from './1.jpg';
// import image4 from './men7.jpg';
import './Slider.css';
const CarouselContainer = () => {
  return (
    <Carousel 
    className='slider-container1 mx-auto ' fade={true} pause={false}>
      <Carousel.Item className='slider-box ' interval={2000}>
        <img
       
          className="slider-box-image d-block w-100"
          src={image1}
          alt="First slide"
        
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>UrMentor can help in ......................</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='slider-box' interval={2000}>
        <img
          className="slider-box-image d-block w-100"
          src={image2}
        //   width={171}
        //   height={180}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Urmentor helps u to make the connect with india's topper and great profff......</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider-box' interval={2000}>
        <img
          className=" slider-box-image d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='text-dark-50'>Third slide label</h5>
          <p>UrMentor helps students to know about all possible career path and can .......</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;