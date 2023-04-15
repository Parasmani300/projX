import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function () {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <section id="why-us" className="why-us section-bg">
    <div className="container" data-aos="fade-up" >

      <div className="row gy-4">

        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100" >
          <div className="why-box">
            <h3>Why Choose GoForStar?</h3>
            <p>
              We are the first of our type in the city. Trust on us. We will provide you the best of our services.
            </p>
            <div className="text-center">
              <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          <div className="row gy-4">

            <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200" >
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-clipboard-data"></i>
                <h4>Operating in 24 cities</h4>
                <p>We provide you the best service</p>
              </div>
            </div>

            <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300" >
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-gem"></i>
                <h4>Affordable plan for all</h4>
                <p>Choose from our variety of plan</p>
              </div>
            </div>

            <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400"  >
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-inboxes"></i>
                <h4>Please reach us in case of any query</h4>
                <p>Email us @ stargofor@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>

  )
}
