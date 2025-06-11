import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import "./ContactPage.css"; // custom styles

const Contact = () => {
  return (
    <section className="contact-section py-5 px-3">
      <h2 className="contact-head text-center py-3 text-white mb-5">Contact</h2>

      <div className="container">
        <div className="row justify-content-center gy-5">
          {/* Contact Info */}
          <div className="col-12 col-md-5">
            <h3 className="section-title">Contact Information</h3>
            <p className="section-subtext">
              We'd love to hear from you! Whether you have a question or want to connect, feel free to reach out.
            </p>

            <div className="contact-info mt-4">
              <div className="d-flex align-items-center mb-3">
                <IoMail className="me-2" style={{color:'#15291c'}}/>
                <a href="mailto:aairatravelsgroup@gmail.com" className="text-decoration-none text-dark">
                  aairatravelsgroup@gmail.com
                </a>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaPhoneAlt className="me-2" style={{color:'#15291c'}} />
                <a href="tel:+917902606303" className="text-decoration-none text-dark">
                  +91 79026 06303
                </a>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaLocationDot className="me-2" style={{color:'#15291c'}} />
                <span>Nellamkandy, Koduvally, Kozhikode, 673585</span>
              </div>

              <div className="d-flex gap-3 mt-4">
                <a href="https://www.instagram.com/aairatravels/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                </a>
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-md-6">
            <h3 className="section-title">Contact Us Now</h3>

            <form
              action="https://formspree.io/f/mgvyvwob"
              method="POST"
              className="mt-4"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" required className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" required className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" name="phone" id="phone" required className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="form-control"
                ></textarea>
              </div>

              <button type="submit" className="sendmsg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
