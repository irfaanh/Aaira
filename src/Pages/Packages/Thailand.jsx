import React from 'react';
import thailandbanner from '../../assets/images/packages/thailand/thailandbanner.webp';
import bkkairport from '../../assets/images/packages/thailand/bkkairport.jpg';
import coralIsland from '../../assets/images/packages/thailand/pattayasight.jpg';
import pattayaBeach from '../../assets/images/packages/thailand/bangkokimg.webp';
import bangkokCity from '../../assets/images/packages/thailand/thailandbanner.webp';
import './Thailand.css';

const ThailandDetails = [
  {
    day: 'Day 1',
    title: 'Arrival in Bangkok & Proceed to Pattaya',
    description: [
      'Arrival At Bangkok Airport',
      'Our Representative will meet you at Airport',
      'Tiger Topia Entrance + Photo Session with Tiger',
      'Pattaya Floating Market',
      'Check In at Pattaya Hotel (Standard Hotel Check in Time Is 2 PM)',
      'Pattaya City Tour (Gems Gallery + Big Buddha + View Point)',
    ],
    image: bkkairport,
  },
  {
    day: 'Day 2',
    title: 'Bangkok Temple Tour & Departure',
    description: [
      'Breakfast at Hotel',
      'Alcazar Show (Normal Seat)',
      `Half Day Coral Island Tour by Speed Boat with Indian
        Lunch on Sic Basis (Water Activities Guest Needs to
        Manage Themselves)`,
    ],
    image: coralIsland,
  },
  {
    day: 'Day 3',
    title: 'Pattaya to Bangkok',
    description: [
      'Breakfast & Check out from Hotel',
      'Transfer to Bangkok',
      'Enroute Full Day Safari World & Marine Park Tour with Lunch',
      'Evening Check in At Bangkok Hotel & Free Time for Your Leisure',
    ],
    image: pattayaBeach,
  },
  {
    day: 'Day 4',
    title: 'Departure from Bangkok',
    description: [
      'Breakfast at Hotel',
        `Bangkok Temple Tour
        (Marble Buddha + Golden
        Buddha)`,
      `Drop at Bangkok Airport &
        Departure with Good
        Memories`,
    ],
    image: bangkokCity,
  },
];

const Thailand = () => {
  return (
    <div className="container-fluid p-0">
      <div className="banner-wrapper mx-auto">
        <img src={thailandbanner} alt="Thailand Banner" className="img-fluid rounded shadow"/>
        <div className="headandpara text-center mt-4 px-3">
          <h1 className="fw-bold" style={{color:'#15291c'}}>Explore Thailand</h1>
          <p className=" text-muted">
            When it comes to dream destinations, Thailand is way up there on the
            list. It's flanked by some of the world's most stunning beaches, has kilo
            meters of untouched jungle, is laced with ancient temples, and has
            inimitable night-life and legendary, fiery cuisine. What follows are just a
            few attractions that have put Thailand's tourism in the news recently.
            All are worth considering when you're planning your trip.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {ThailandDetails.map((item, index) => (
          <div className="row align-items-center mb-5" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6">
                  <h3 className=" fw-bold" style={{color:'#15291c'}}>{item.day}: {item.title}</h3>
                  <ul className="mt-3">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="mb-1">{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <img src={item.image} alt={item.title} className="img-fluid rounded shadow" />
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 order-md-2">
                  <h3 className="fw-bold" style={{color:'#15291c'}}>{item.day}: {item.title}</h3>
                  <ul className="mt-3">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="mb-1">{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6 order-md-1">
                  <img src={item.image} alt={item.title} className="img-fluid rounded shadow" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thailand;
