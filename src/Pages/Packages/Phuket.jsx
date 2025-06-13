import React from 'react';
import phuket from '../../assets/images/packages/phuket/puketbanner.webp'
import phuketcitytour from '../../assets/images/packages/phuket/phuketcitytour.jpg';
import phiphi from '../../assets/images/packages/phuket/phi-phi.jpg';
import jamesbondisland from '../../assets/images/packages/phuket/jamesbondisland.webp';
import tigerkingdom from '../../assets/images/packages/phuket/tigerkingdom.jpg';
import SafariWorldBangkok from '../../assets/images/packages/phuket/SafariWorldBangkok.jpg';
import './Bali.css';

const PhuketDetails = [
  {
    day: 'Day 1',
    title: 'Arrival, City tour',
    description: [
      `Arrival at Phuket Airport`,
      `Warmly welcomed by our Representative`,
      `Transfer to Phuket city tour`,
      `Karon View point`,
      `Chalong temple`,
      `Phuket old town`,
      `Transfer to the Tiger Kingdom`,
      `Gems gallery`,
      `Cashew shop`,
      `Check in at the Resort`,
      `Overnight stay at the Resort`,
    ],
    image: phuketcitytour,
  },
  {
    day: 'Day 2',
    title: 'Phi Phi Island ',
    description: [
      `Wake up with a delicious breakfast`,
      `Transfer to Phi Phi Island`,
      `Lunch`,
      `Maya bay`,
      `Snorkeling`,
      `Back to resort`,
      `Overnight stay at resort`,
    ],
    image: phiphi,
  },
  {
    day: 'Day 3',
    title: 'James Bond Island & Simon Cabaret Show',
    description: [
      `Wake up with a delicious breakfast`,
      `James bond Island (guests will set out on an exciting journey to the
        iconic James Bond Island, famous for its dramatic limestone cliffs
        and featured in the movie The Man with the Golden Gun. The tour
        includes a scenic ride by traditional longtail boat and an
        adventurous sea canoe experience through caves and lagoons, all
        with the National Park fee included)`,
      `Lunch`,
      `Simon Cabaret Show`,
      `Back to resort`,
      `Overnight stay at resort`
    ],
    image: jamesbondisland,
  },
  {
    day: 'Day 4',
    title: 'Tiger kingdom',
    description: [
      `Wake up with a delicious breakfast`,
      `Ready to check out from the hotel`,
      `Transfer to the Airport`,
      `Arrival at Bangkok Airport`,
      `Transfer to Temple Tour (Marble Temple + Golden Buddha)`,
      `Check in at the hotel`,
      `Overnight stay at hotel`
    ],
    image: tigerkingdom,
  },
  {
    day: 'Day 5',
    title: 'Safari world & Marine Park',
    description: [
      `Wake up with a delicious breakfast`,
      `Ready to check out from the hotel`,
      `Transfer to Safari world & Marine Park with Lunch (Closed Mondays)`,
      `Shopping`,
      `Drop to the Airport`,
      `Back to destination with unforgettable memories`,
    ],
    image: SafariWorldBangkok,
  },
];

const Phuket = () => {
  return (
    <div className="container-fluid p-0">
      <div className="banner-wrapper mx-auto">
        <img src={phuket} alt="Thailand Banner" className="img-fluid rounded shadow"/>
        <div className="headandpara text-center mt-4 px-3">
          <h1 className="fw-bold" style={{color:'#15291c'}}>Explore Phuket</h1>
          <p className=" text-muted">
            When it comes to tropical island escapes, Phuket stands tall as a favorite among travelers.
            Set against the backdrop of the sparkling Andaman Sea,
             this Thai paradise is known for its golden beaches, lush hills,
              and vibrant nightlife. Whether it’s island-hopping to Phi Phi,
               exploring the cultural charm of Old Phuket Town, or simply
                unwinding with a beachfront Thai massage, Phuket blends relaxation
                 and excitement effortlessly. With rich local flavors, warm hospitality,
             and picture-perfect sunsets, Phuket offers an experience that lingers long after you’ve left its shores.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {PhuketDetails.map((item, index) => (
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

export default Phuket;
