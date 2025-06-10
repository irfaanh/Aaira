import React from 'react';
import manalibanner from '../../assets/images/packages/manali/manalibanner.webp';
import delhiairport from '../../assets/images/packages/manali/delhiairport.webp';
import Tibetan_Monastery from '../../assets/images/packages/manali/Tibetan_Monastery.jpg';
import rohthag from '../../assets/images/packages/manali/rohthag.jpg';
import kullu from '../../assets/images/packages/manali/kullu.jpg';
import './Bali.css';

const ManaliDetails = [
  {
    day: 'Day 1',
    title: 'DEPARTURE FROM DELHI',
    description: [
      `EVENING PROCEED TO MANALI IN A SEMI SLEEPER VOLVO`,
      ` REST OF THE NIGHT YOU WILL BE SPEND THE VOLVO`,
    ],
    image: delhiairport,
  },
  {
    day: 'Day 2',
    title: 'MANALI LOCAL SITE SEEING',
    description: [
      `UPON ARRIVAL AT MANALI, PROCEED TO HOTEL FOR CHECK-IN AND FRESHUP`,
      `TIBETAN MONASTERY`,
      ` HADIMBA DEVI TEMPLE`,
      `JOGNI FALLS (IN ACCORDANCE WITH THE WEATHER)`,
      ` MALL ROAD SHOPPING`,
      `AFTER SIGHTSEEING RETURN BACK TO HOTEL.`,
      `OVERNIGHT HOTEL STAY AT MANALI`,
    ],
    image: Tibetan_Monastery,
  },
  {
    day: 'Day 3',
    title: 'ROHTHANG PASS / KOKSAR',
    description: [
      `AFTER REFRESHMENT AND BREAKFAST`,
      `CHECKOUT FROM THE HOTEL`,
      `PPROCEED TO SNOW SPOT`,
      `ROHTANG PASS`,
      `SOLLANG VALLEY`,
      ` ATAL TUNNEL`,
      `SISSU`,
      `KOKSAR`,
      `ROHTANG (INN ACCORDANCE WITH THE WEATHER )`,
      `AFTER SNOW SITE SEEING PROCEED BACK TO HOTEL IN MANALI`,
      `DINNER WILL BE PROVIDED`,
      `REST OF THE NIGHT YOU’LL SPEND IN THE HOTEL`,
    ],
    image: rohthag,
  },
  {
    day: 'Day 4',
    title: 'KULLU',
    description: [
      `AFTER REFRESHMENT AND BREAKFAST`,
      `CHECKOUT FROM THE CAMPSITE`,
      `PROCEED FOR ADVENTURE ACTIVITIES ( ACCORDANCE
WITH WEATHER AND
WATER CURRENT )`,
      `RAFTING`,
      `PARAGLIDING`,
    `ZIPLINE`,
      `AFTER ACTIVITIES NATURE PARK AT KULLU`,
      `EXCURSION THROUGH PINE WOODS`,
      `MEMORY SHARING`,
      `AFTER ADVENTURE ACTIVITIES`,
      `RETURN TO NEW DELHI IN A VOLVO SEMI SLEEPER BUS`,
      `DINNER WILL BE PROVIDED`,
    ],
    image: kullu,
  },
  {
    day: 'Day 5',
    title: 'ARRIVAL AT DELHI',
    description: [
      `REACH AT DELHI`,
      ` END OF THE JOURNEY`,
    ],
    image: delhiairport,
  },
];

const Manali = () => {
  return (
    <div className="container-fluid p-0">
      <div className="banner-wrapper mx-auto">
        <img src={manalibanner} alt="Thailand Banner" className="img-fluid rounded shadow"/>
        <div className="headandpara text-center mt-4 px-3">
          <h1 className="fw-bold" style={{color:'#15291c'}}>Explore Manali</h1>
          <p className=" text-muted">
            When it comes to dream mountain getaways, Kullu and Manali reign supreme in the hearts of travelers.
             Nestled in the Himalayas, these twin destinations are known for their snow-capped peaks, pine-scented valleys,
              and serene rivers. Whether it's the thrill of paragliding in Solang Valley, exploring ancient temples,
               or soaking in the natural hot springs of Vashisht, the region offers a perfect mix of adventure and peace.
                With charming local culture, Himachali cuisine, and breathtaking landscapes at every turn,
             Kullu and Manali promise an unforgettable experience that keeps calling you back.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {ManaliDetails.map((item, index) => (
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

export default Manali;
