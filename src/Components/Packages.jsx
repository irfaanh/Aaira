import './Packages.css';
import manali from '../assets/images/packages/manali/manalibanner.webp';
import kashmir from '../assets/images/packages/kashmir/jammu.webp';
import wayanad from '../assets/images/packages/wayanad/wayanad.webp';

import bali from '../assets/images/packages/bali/bali.jpg';
import malaysia from '../assets/images/packages/malaysia/malaysiabanner.png';
import thailand from '../assets/images/packages/thailand/thailand.jpg';
import azerbaijan from '../assets/images/packages/azerbaijan/Azerbaijancover.jpg'
import kazhakhstan from '../assets/images/packages/kazhakhstan/kazhakhstan.jpg'
import georgia from '../assets/images/packages/georgia/georgia.jpg'
import phuket from '../assets/images/packages/phuket/phuketcover.jpg'


import { CiStopwatch } from "react-icons/ci";
// import { LiaMoneyCheckAltSolid } from "react-icons/lia";

const DomesticPackageArray = [
  {
    image: manali,
    title: 'Manali and Kullu',
    caption: 'A serene mountain retreat with snow-capped peaks and rich charm.',
    time: '5 Days 4 Nights',
    amount: 'Starting from ₹25,500/-',
    link:'/manali'
  },
  {
    image: kashmir,
    title: 'Kashmir',
    caption: 'Explore the heaven on earth with snow peaks and valleys.',
    time: '6 Days 5 Nights',
    amount: 'Starting from ₹30,000/-'
  },
  {
    image: wayanad,
    title: 'Wayanad',
    caption: 'Mist-covered hills, waterfalls, and wildlife adventures await.',
    time: '3 Days 2 Nights',
    amount: 'Starting from ₹12,000/-'
  }
];

const InternationalPackageArray = [
  {
    image: bali,
    title: 'Bali',
    caption: 'A tropical paradise with scenic beaches and cultural beauty.',
    time: '5 Days 4 Nights',
    amount: 'Starting from ₹25,500/-',
    link:'/bali'
  },
  {
    image: malaysia,
    title: 'Malaysia',
    caption: 'A harmonious blend of lush rainforests, modern cities, and diverse traditions.',
    time: '4 Days 3 Nights',
    amount: 'Starting from ₹30,000/-',
    link:'/malaysia'
  },
  {
    image: thailand,
    title: 'Thailand',
    caption: 'A vibrant escape filled with golden temples, and stunning coastlines.',
    time: '4 Days 3 Nights',
    amount: 'Starting from ₹12,000/-',
    link:'/thailand'
  },
  {
    image: azerbaijan,
    title: 'Azerbaijan',
    caption: 'A land where ancient flames meet futuristic skylines, wrapped in rich culture and Caspian charm.',
    time: '4 Days 3 Nights',
    amount: 'Starting from ₹12,000/-',
    link:'/azerbaijan'
  },
  {
    image: kazhakhstan,
    title: 'Kazhakhstan',
    caption: 'A boundless steppe of golden horizons, modern marvels, and nomadic spirit.',
    time: '4 Days 3 Nights',
    amount: 'Starting from ₹12,000/-',
    link:'/kazhakhstan'
  },
  {
    image: georgia,
    title: 'Georgia',
    caption: 'Where mountain peaks kiss the clouds and timeless traditions warm every traveler’s heart.',
    time: '4 Days 3 Nights',
    amount: 'Starting from ₹12,000/-',
    link:'/georgia'
  },
  {
    image: phuket,
    title: 'Phuket',
    caption: 'Where mountain peaks kiss the clouds and timeless traditions warm every traveler’s heart.',
    time: '4 Days 3 Nights',
    amount: 'Starting from ₹12,000/-',
    link:'/phuket'
  }

];

const Packages = () => {
  return (
    <div className="services container-fluid d-flex flex-column align-items-center py-5 mt-5">
      <div className="services__wrapper text-center mb-4">
        <h1 className="packagepagehead fw-bolder">Uncover Your Dream Getaway</h1>
        <p>
          Delve into our exclusive tour packages crafted to deliver unforgettable experiences, scenic wonders, and moments you'll cherish forever.
        </p>
      </div>
      

      <div className='d-flex flex-column align-items-center'>
        <h2 className='my-4'>Domestic Packages</h2>
      <div className="packagecardsection row row-cols-1 row-cols-md-3 g-4 px-1 w-75 justify-content-center">
        
        {DomesticPackageArray.map((pkg, index) => (
          <div key={index} className="col packagecardinner">
            <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
              <img src={pkg.image} className="card-img-top img-fluid" alt={`${pkg.title} image`} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{pkg.title}</h5>
                <p className="card-text text-muted">{pkg.caption}</p>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CiStopwatch size={20} />
                  <span>{pkg.time}</span>
                </div>
                {/* <div className="d-flex align-items-center gap-2">
                  <LiaMoneyCheckAltSolid size={20} />
                  <span>{pkg.amount}</span>
                </div> */}
                <hr />
                <div className='moreifolink d-flex justify-content-center'>
                    <a href={pkg.link}>More Info</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className='d-flex flex-column align-items-center'>
        <h2 className='my-4'>International Packages</h2>
      <div className="packagecardsection row row-cols-1 row-cols-md-3 g-4 px-1 w-75 justify-content-center">
        
        {InternationalPackageArray.map((pkg, index) => (
          <div key={index} className="col packagecardinner">
            <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
              <img src={pkg.image} className="card-img-top img-fluid" alt={`${pkg.title} image`} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{pkg.title}</h5>
                <p className="card-text text-muted">{pkg.caption}</p>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <CiStopwatch size={20} />
                  <span>{pkg.time}</span>
                </div>
                {/* <div className="d-flex align-items-center gap-2">
                  <LiaMoneyCheckAltSolid size={20} />
                  <span>{pkg.amount}</span>
                </div> */}
                <hr />
                <div className='moreifolink d-flex justify-content-center'>
                    <a href={pkg.link}>More Info</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Packages;
