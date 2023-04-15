import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function () {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
  <section id="hero" className="hero d-flex align-items-center section-bg">
      <div className="container">
        <div className="row justify-content-between gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h2 data-aos="fade-up" >Make your Party<br />memorable with us</h2>
            <p data-aos="fade-up" data-aos-delay="100" >Best in the city. Explore the options by clicking on Book now. Why wait book your party now...</p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200" >
              <a href="#menu" className="btn-book-a-table">Book Now</a>
              <a href="https://www.youtube.com/channel/UC180b0CfNLhTzVr8ehSbj1w" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img src="https://cdn.greenvelope.com/blog/wp-content/uploads/AdobeStock_133800814-scaled.jpeg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300"  />
          </div>
        </div>
      </div>
    </section>
  
  )
}
