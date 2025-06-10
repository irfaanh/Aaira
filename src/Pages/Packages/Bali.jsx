import React from 'react';
import balibanner from '../../assets/images/packages/bali/balibanner.webp';
import balirport from '../../assets/images/packages/bali/baliairport.jpg';
import coralIsland from '../../assets/images/packages/bali/kintamani.jpg';
import pattayaBeach from '../../assets/images/packages/bali/uluwata.jpg';
import bangkokCity from '../../assets/images/packages/bali/bedugul.jpg';
import './Bali.css';

const BaliDetails = [
  {
    day: 'Day 1',
    title: 'Arrival in Bali – Hotel Transfer – Leisure Time',
    description: [
      `Upon arrival at Ngurah Rai International Airport, our representative will receive you and
transfer you to your hotel on a private basis. After check-in, you have the rest of the day free
at leisure to relax or explore the nearby areas at your own pace.`,
    ],
    image: balirport,
  },
  {
    day: 'Day 2',
    title: 'Kintamani Volcano & Ubud Cultural Tour',
    description: [
      `Enjoy breakfast at the hotel, followed by a full-day tour. Begin with a visit to the artisan
villages of Mas and Celuk, renowned for their wood carvings and silver jewelry. Proceed to
Kintamani to witness the stunning views of Mount Batur and Lake Batur. Later, stop by a
local agro-tourism coffee plantation and taste the famous Luwak coffee. Return to the hotel
by evening.`,
    ],
    image: coralIsland,
  },
  {
    day: 'Day 3',
    title: 'Water Sports Adventure & Uluwatu Temple Visit',
    description: [
      `After breakfast, head to Tanjung Benoa Beach for water sports activities, including an
exciting Banana Boat Ride. Post lunch, proceed to visit the iconic Uluwatu Temple perched
on a cliff, offering breath-taking views of the Indian Ocean. Return to the hotel in the
evening.`,
    ],
    image: pattayaBeach,
  },
  {
    day: 'Day 4',
    title: 'Bedugul Highlands & Temple Trail',
    description: [
      `Today, explore Bali’s beautiful highlands with a visit to the colourful Bedugul Market and
the picturesque Ulun Danu Beratan Temple situated on the lake. The tour wraps up with a
visit to the famous sea temple – Tanah Lot, known for its magical sunset vistas. Return to
your hotel and enjoy your final night in Bali.`,
    ],
    image: bangkokCity,
  },
  {
    day: 'Day 5',
    title: 'Departure from Bali',
    description: [
      `After breakfast, check out from the hotel and enjoy your private transfer to Ngurah Rai
International Airport for your onward journey.`,
    ],
    image: balirport,
  },
];

const Bali = () => {
  return (
    <div className="container-fluid p-0">
      <div className="banner-wrapper mx-auto">
        <img src={balibanner} alt="Thailand Banner" className="img-fluid rounded shadow"/>
        <div className="headandpara text-center mt-4 px-3">
          <h1 className="fw-bold" style={{color:'#15291c'}}>Explore Bali</h1>
          <p className=" text-muted">
            When it comes to dream destinations, Bali stands proudly among the top. Known for its pristine beaches, lush green rice terraces,
            and deeply spiritual culture,
            Bali offers a blend of natural beauty and vibrant tradition. From majestic temples perched on cliffs to world-renowned surf spots,
            the island is a paradise for both relaxation and adventure. Add to that the warm hospitality, rich Balinese cuisine,
            and thriving art scene, and it’s easy to see why Bali continues to captivate travelers from around the globe.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {BaliDetails.map((item, index) => (
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

export default Bali;
