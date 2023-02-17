import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h2>Contact</h2>
        <p>Need Help? <span>Contact Us</span></p>
      </div>

      <div className="mb-3">
        <iframe style={{border:"0",width:"100%",height:"350px"}} src="https://goo.gl/maps/tupNtLVJHJjextLe7" frameBorder="0" allowFullScreen></iframe>
      </div>

      <div className="row gy-4">

        <div className="col-md-6">
          <div className="info-item  d-flex align-items-center">
            <i className="icon bi bi-map flex-shrink-0"></i>
            <div>
              <h3>Our Address</h3>
              <p>Gaya, Bihar 823001</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item d-flex align-items-center">
            <i className="icon bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email Us</h3>
              <p>3starParty@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item  d-flex align-items-center">
            <i className="icon bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Call Us</h3>
              <p>+91 7488210620</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item  d-flex align-items-center">
            <i className="icon bi bi-share flex-shrink-0"></i>
            <div>
              <h3>Opening Hours</h3>
              <div><strong>Mon-Sat:</strong> 9AM - 23PM;
              </div>
            </div>
          </div>
        </div>

      </div>

      <form action="forms/contact.php" method="post" role="form" className="php-email-form p-3 p-md-4">
        <div className="row">
          <div className="col-xl-6 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
          </div>
          <div className="col-xl-6 form-group">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
        </div>
        <div className="form-group">
          <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Send Message</button></div>
      </form>

    </div>
  </section>
  )
}
