import React from 'react';
import './AllServices.css';
import { PiAirplaneInFlight } from "react-icons/pi";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { LuHotel } from "react-icons/lu";
import { LiaKaabaSolid } from "react-icons/lia";
import { FaUserShield } from "react-icons/fa6";
import { FaPassport } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

const AllServices = () => {
  const services = [
    { icon: <PiAirplaneInFlight size={45} />, title: "Flights" },
    { icon: <FaGlobeAfrica size={45} />, title: "Visa" },
    { icon: <FaUmbrellaBeach size={45} />, title: "Holidays" },
    { icon: <LuHotel size={45} />, title: "Hotel" },
    { icon: <LiaKaabaSolid size={45} />, title: "Hajj & Umrah" },
    { icon: <FaUserShield size={45} />, title: "Insurance" },
    { icon: <FaPassport size={45} />, title: "Password" },
    { icon: <IoNewspaperOutline size={45} />, title: "Attestation" },
  ];

  return (
    <div className="services container-fluid d-flex flex-column align-items-center justify-content-center py-5">
      <div className="services__wrapper w-75 text-center">
        <h1 className="services__title  fw-bolder">Explore Our Services</h1>
        <p className="services__subtitle">
          Discover the Difference with Our Comprehensive Travel Solutions. Whether you're planning a family holiday,
           booking a business trip, or preparing for a spiritual journey, we offer expert support every step of the way.
           Dive into our wide range of services crafted to ensure a smooth, memorable, and satisfying travel experience.
        </p>

        <div className="row justify-content-center mb-4">
          {services.map((service, index) => (
            <div className="col-6 col-sm-4 col-md-2 mb-4" key={index}>
              <div className="services__item d-flex flex-column align-items-center gap-3 mt-3">
                <a
                  href={`https://wa.me/917902606303?text=Hi! I'm interested in your ${encodeURIComponent(service.title)} Service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="services__icon">{service.icon}</div>
                </a>
                <h6 className="services__name mt-2">{service.title}</h6>
              </div>
            </div>
          ))}
        </div>

        <a href={`https://wa.me/917902606303?text=Hi! Aaira, I would like to know more about your services.`} target="_blank" rel="noopener noreferrer">
          <button className="services__button btn">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default AllServices;
