import React from 'react';
import malaysiabanner from '../../assets/images/packages/malaysia/malaysiabanner.png';
import malaysiaairport from '../../assets/images/packages/malaysia/malaysiaairport.png';
import betucaves from '../../assets/images/packages/malaysia/betucaves.jpg';
import klcity from '../../assets/images/packages/malaysia/klcity.jpg';
import klcc from '../../assets/images/packages/malaysia/klcc.jpg';
import './Malaysia.css';

const MalaysiaDetails = [
  {
    day: 'Day 1',
    title: 'Arrival in Malaysia Airport',
    description: [
      'Meet and greet at airport',
      'Tour to Putrajaya and Thean hou temple',
      `Check in Hotel(check in time is 3pm, guests have to wait at the hotel lobby till
check in time)`,
    ],
    image: malaysiaairport,
  },
  {
    day: 'Day 2',
    title: 'Betu caves',
    description: [
      'Breakfast at Hotel',
      'Tour to Batu caves and Genting Highland',
      `2 way cable car tickets included (Please note Cable car tickets can be upgraded to
        express tickets at an addition of 20 RM per person)`,
    ],
    image: betucaves,
  },
  {
    day: 'Day 3',
    title: 'KL City Tour & Leisure Time',
    description: [
      'Breakfast & Check out from Hotel',
      'Half day KL city tour including KL Tower Observatory Deck with entry tickets (Duration 4 hrs)',
      `City Scope:(Kings palace, National Monument, National Mosque, Independence
        Square, KLCC Park)`,
    ],
    image: klcity,
  },
  {
    day: 'Day 4',
    title: 'Departure from Malaysia',
    description: [
      'Check out from hotel',
        `Tour to KLCC Aquarium with entry tickets (Duration 2 hrs.)`,
      `Vehicle allotted for shopping (Duration 1 hr.)`,
      `Drop off to Airport for your flight to next destination`
    ],
    image: klcc,
  },
];

const Malaysia = () => {
  return (
    <div className="container-fluid p-0">
      <div className="banner-wrapper mx-auto">
        <img src={malaysiabanner} alt="Thailand Banner" className="img-fluid rounded shadow"/>
        <div className="headandpara text-center mt-4 px-3">
          <h1 className="fw-bold" style={{color:'#15291c'}}>Explore Malaysia</h1>
          <p className=" text-muted">
            When it comes to dream destinations, Malaysia is a captivating blend of tradition and modernity.
             From its dazzling skyline in Kuala Lumpur to the untouched rainforests of Borneo,
              the country offers a rich tapestry of experiences.
               You'll find golden beaches, vibrant night markets, colonial charm,
                and a melting pot of cultures that influence everything from language to food. Whether you're drawn to ancient temples, exotic wildlife, or iconic towers, Malaysia delivers with style and soul.
             What follows are some must-see highlights to inspire your journey through this dynamic destination.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {MalaysiaDetails.map((item, index) => (
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

export default Malaysia;
