import './LandingPackages.css';
import img1 from '../assets/images/packages/bali/bali.jpg';
import img2 from '../assets/images/packages/manali/manalibanner.webp';
import img3 from '../assets/images/packages//thailand/thailand.jpg';
import { CiStopwatch } from "react-icons/ci";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';

const PackageArray = [
  {
    image: img1,
    title: 'Bali',
    caption: 'A tropical paradise with scenic beaches and cultural beauty.',
    time: '5 Days 4 Nights',
    amount: 'Starting from ₹25,500/-',
    link:'/bali'
  },
  {
    image: img2,
    title: 'Manali',
    caption: 'A serene mountain retreat with snow-capped peaks and rich charm.',
    time: '6 Days 5 Nights',
    amount: 'Starting from ₹30,000/-',
    link:'/manali'
  },
  {
    image: img3,
    title: 'Thailand',
    caption: 'A vibrant escape filled with golden temples, and stunning coastlines.',
    time: '4 Days 3 Nights',
    amount: 'Starting from ₹12,000/-',
    link:'/thailand'
  }
];

const LandingPackages = () => {
    const navigate = useNavigate();
  return (
    <div className="services container-fluid d-flex flex-column align-items-center py-5">
      <div className="services__wrapper text-center mb-4">
        <h1 className="landingpackagehead fw-bolder">Uncover Your Dream Getaway</h1>
        <p className='landingpackagepara'>
          Delve into our exclusive tour packages crafted to deliver unforgettable experiences, scenic wonders, and moments you'll cherish forever.
        </p>
      </div>
      
      <div className="packagecardsection row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 px-1 justify-content-center">
        {PackageArray.map((pkg, index) => (
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
        <button onClick={()=>navigate('/packages')} className='viewpackagebtn'>View Packages</button>
    </div>
  );
};

export default LandingPackages;
