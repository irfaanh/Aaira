import React from 'react';
import { PiAirplaneInFlight } from "react-icons/pi";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import { LiaKaabaSolid } from "react-icons/lia";
import './OurServices.css'

const OurServices = () => {
  const services = [
    { icon: <PiAirplaneInFlight size={45} />, title: "Flights" },
    { icon: <FaGlobeAfrica size={45} />, title: "Visa" },
    { icon: <FaUmbrellaBeach size={45} />, title: "Holidays" },
    { icon: <LuHotel size={45} />, title: "Hotel" },
    { icon: <LiaKaabaSolid size={45} />, title: "Hajj & Umrah" },
  ];

  return (
    <div
      className="container-fluid d-flex flex-column align-items-center 
      justify-content-center"
      style={{paddingTop: '125px', paddingBottom: '100px',backgroundColor:'#15291c'}}
    >
      <div className="w-75 text-center">
        <h1 className="HeroServiceHead mb-3 fw-bolder text-white">
          Explore Our Services
        </h1>
        <p className=" mb-5 text-white" style={{ fontSize: '15px',textAlign:'center' }}>
          Experience Seamless Travel with Our Services. Whether you're planning a quick getaway or a grand adventure, our expertly crafted solutions are here to support you every step of the way. Discover a wide array of services tailored to make your journey smooth, memorable, and truly exceptional
        </p>

        <div className="row justify-content-center mb-3">
          {services.map((service, index) => (
            <div className="col-12 col-sm-4 col-md-2 mb-4" key={index}>
              <div className="d-flex flex-column align-items-center">
                <a
                  href={`https://wa.me/917902606303?text=Hi! I'm interested in your ${encodeURIComponent(service.title)} Service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                <div className='text-white'>{service.icon}</div>
                </a>
                <h6 className="mt-2 text-white">{service.title}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button - centered below the icons */}
        <a href="/allservices">
          <button className="btn" style={{ borderColor: "white", color: "white" }}>
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default OurServices;
