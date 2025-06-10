import './Services.css'
import { MdCardTravel } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { IoMdGlobe } from "react-icons/io";
import { Link } from 'react-router';



const Services = () => {
  return (
    <section className='bg-black'>
      <div className='container pt-3 d-flex flex-column align-items-center '>
        <div className='text-center col-12 col-md-8'>
          <h2 className='our-service'>Our Services</h2>
          <p className='our-service-para'>Discover the best travel experiences with Aaira</p>
        </div>

        {/* Responsive row for cards */}
        <div className='card-main d-flex justify-content-center flex-wrap flex-lg-nowrap w-auto mt-2 p-4 gap-5'>

            <div
            onClick={() => {
                const el = document.getElementById('travelpackage')
                if(el){
                    el.scrollIntoView({behavior:'smooth',block:'center'})
                }
            }}
             className='col-12 col-sm-6 col-md-4 d-flex justify-content-center text-decoration-none mb-4'>
            <div className='service-card position-relative text-center'>
                <div className='icon-wrapper position-absolute top-0 start-50 translate-middle'>
                <MdCardTravel className='service-icon' />
                </div>
                <div className='card-body mt-5 pt-4'>
                <h3 className='cardtext'>Travel Packages</h3>
                </div>
            </div>
            </div>

            <div onClick={() => {
                const el = document.getElementById('flightticket')
                if(el){
                    el.scrollIntoView({behavior:'smooth',block:'center'})
                }
            }}
            className='col-12 col-sm-6 col-md-4 d-flex justify-content-center text-decoration-none mb-4'>
            <div className='service-card position-relative text-center'>
                <div className='icon-wrapper position-absolute top-0 start-50 translate-middle'>
                <IoTicketOutline className='service-icon' />
                </div>
                <div className='card-body mt-5 pt-4'>
                <h3 className='cardtext'>Flight Tickets</h3>
                </div>
            </div>
            </div>

            <div 
            onClick={() => {
                const el = document.getElementById('visaservice')
                if(el){
                    el.scrollIntoView({behavior:'smooth',block:'center'})
                }
            }}
             className='col-12 col-sm-6 col-md-4 d-flex justify-content-center text-decoration-none mb-4'>
            <div className='service-card position-relative text-center'>
                <div className='icon-wrapper position-absolute top-0 start-50 translate-middle'>
                <IoMdGlobe className='service-icon' />
                </div>
                <div className='card-body mt-5 pt-4'>
                <h3 className='cardtext'>Visa Services</h3>
                </div>
            </div>
            </div>
        </div>

      </div>

      <div className=' d-flex justify-content-center'>
        <Link to={'/allservices'}><button className='all-services'>View All Services</button></Link>
      </div>

        <div className='container py-5'>
            <div className='d-flex flex-column' style={{gap:'100px'}}>

                {/* Section 1 */}
                <div id='travelpackage' className='service-bottumcard row align-items-center'>
                <div className='col-md-6 mb-4 mb-md-0'>
                    <img className="img-fluid rounded serviceimg" src="/images/travelpackage.jpg" alt="Travel Package" />
                </div>
                <div className='col-md-6'>
                <h2 className="service_head mb-3">Where do you want to go? Our travel packages will take you there.</h2>
                    <p className='service_para'>
                    Each package is built to give you a complete and seamless experience.
                    We handle the planning so you can focus on making memories.
                    Your next great escape starts right here.
                    </p>
                    <a href="/packages">
                    <button className="servicebtn packagebtn">View Packages</button>
                    </a>
                </div>
                </div>

                {/* Section 2 */}
                <div id='flightticket' className='service-bottumcard row align-items-center flex-md-row-reverse'>
                <div className='col-md-6 mb-4 mb-md-0'>
                    <img className="img-fluid rounded serviceimg" src="/images/ticketservices.jpg" alt="Ticket Services" />
                </div>
                <div className='col-md-6'>
                    <h2 className="service_head mb-3">Your flight, your way. Booking made simple and fast.</h2>
                    <p className='service_para'>
                    Find the best flights, compare prices, and book with confidence.
                    Whether it's a business trip or a vacation, we’ll help you take off with ease.
                    Leave the details to us, and focus on what matters most — your destination.
                    </p>
                    <a href="/allservices">
                    <button className="servicebtn learnmore">Learn More</button>
                    </a>
                </div>
                </div>

                {/* Section 3 */}
                <div id='visaservice' className='service-bottumcard row align-items-center'>
                <div className='col-md-6 mb-4 mb-md-0'>
                    <img className="img-fluid rounded serviceimg" src="/images/visaservices.jpg" alt="Visa Services" />
                </div>
                <div className='col-md-6'>
                    <h2 className="service_head mb-3">Visas made simple. Your gateway to the world is one step away.</h2>
                    <p className='service_para'>
                    Our visa services are designed to help you navigate requirements with ease.
                    From tourist to business visas, we ensure a seamless process.
                    Focus on your destination, and let us handle the paperwork.
                    </p>
                    <a href="/allservices">
                        <button className="servicebtn learnmore">Learn More</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services
