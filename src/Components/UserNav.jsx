import React, { useEffect } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './UserNav.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const UserNav = () => {
  useEffect(() => {
    Aos.init()
  })
  return (
      <nav className="navbar navbar-expand-lg px-3 fixed-top bg-white">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logodiv">
            <a href="/"><img
              className="logoimg"
              src="/images/aaira _logo_black.png"
              alt="logo"
            />
            </a>
          </div>

          <div className="toggleicon d-lg-none">
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>

        <div className="navlink px-3 w-100">
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-4">
              <li className="nav-item" >
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="/packages">Packages</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="/allservices">Services</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="">About</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default UserNav
