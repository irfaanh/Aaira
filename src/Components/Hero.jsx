// import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/scuba.webp';
// import img2 from '../assets/images/traveleraccessories.webp';
// import img3 from '../assets/images/back-view.webp';
// import herowave from '../assets/video/herowave.mp4'
import './Hero.css'
import { useEffect,useState } from 'react';

const images = [img1];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' d-flex justify-content-center align-items-start mb-5 ' style={{marginTop:'70px'}}>
      <div className="custom-hero-container position-relative overflow-hidden d-flex justify-content-center align-items-center" style={{ width: '100%'}}>
      {/* Background Image */}
      <img
        autoPlay
        loop
        muted
        src={images[currentIndex]}
        alt="Hero Background"
        className="heroimg w-100 h-100 object-fit-cover position-absolute top-0 start-0"
        // style={{ objectPosition: 'center', zIndex: 1 }}
      />

      {/* Overlay Content */}
      <div className="position-absolute top-50 start-50 translate-middle text-start text-white z-3 px-4 w-100">
        <p className='herocaption'>Embark your dream Journey with<br/>
            Aaira Tours & Travels</p>
        <h1 className="heroSectionHead display-4 mb-3" >Turning
           Travel <br />Into
           Tales
        </h1>

        <a
          href="/allservices"
          className="herobtn btn text-white btn-lg fw-semibold px-4 py-2"
        >
          Learn More
        </a>
      </div>

      {/* Optional overlay tint */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 2 }}
      ></div>
      </div>
    </div>
  );
};

export default Hero;
