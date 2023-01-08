import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function Header() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
          <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1>Go Party<span>.</span></h1>
      </Link>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Options</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#chefs">Our Team</a></li>
          <li><a href="#gallery">Login</a></li>
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Link className="btn-book-a-table" to="/">Book Now</Link>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
    </div>
  )
}
