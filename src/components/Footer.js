import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function () {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-geo-alt icon"></i>
          <div>
            <h4>Address</h4>
            <p>
              Gaya <br />
              Bihar- 823001<br />
            </p>
          </div>

        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-telephone icon"></i>
          <div>
            <h4>Reservations</h4>
            <p>
              <strong>Phone:</strong> +91 7488210620<br />
              <strong>Email:</strong> stargofor@gmail.com<br />
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-clock icon"></i>
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat: 9AM</strong> - 23PM<br />
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
            <a href="https://www.youtube.com/channel/UC180b0CfNLhTzVr8ehSbj1w" className="youtube"><i className="bi bi-youtube"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100091058963155" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/go4starparty/" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>3starParty</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://github.com/parasmani300">@Parasmani300</a>
      </div>
    </div>
  </footer>
  )
}
