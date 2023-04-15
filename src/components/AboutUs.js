import React,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up" >

        <div className="section-header">
          <h2>About Us</h2>
          <p>Learn More <span>About Us</span></p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-7 position-relative about-img" style={{backgroundImage: "url(https://media.istockphoto.com/id/918933880/photo/birthday-cake-on-a-table.jpg?s=612x612&w=0&k=20&c=pV3vReuTK2x4soVzHTj2hAfhVMbK0pZfNpjEeXo3ges=)"}} /*data-aos="fade-up" data-aos-delay="150" */>
            <div className="call-us position-absolute">
              <h4>Book your Party</h4>
              <p></p>
            </div>
          </div>
           <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300"  >
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                We are the first of our type operating in Bihar. Our services includes Birthday Party, Anniversary and what not.
                Please let us know how we can serve you. 
              </p>
              <ul>
                <li><i className="bi bi-check2-all"></i> Order for Birthday, with three plans: Economy, Premium, Luxury</li>
                <li><i className="bi bi-check2-all"></i>  Order for Anniversary, with three plans: Economy, Premium, Luxury</li>
                <li><i className="bi bi-check2-all"></i>  We are the first of our type in the city and will keep on serving.</li>
              </ul>
              <p>
                Currently operating in Gaya, Nalanada and Patna. We promise you the best of the service.
              </p>

              <div className="position-relative mt-4">
                <img src="https://torq03.com/wp-content/uploads/2020/02/Torq03-The-Perfect-Birthday-Party-Destination-In-Bangalore.jpg" className="img-fluid" alt="" />
                <a href="https://www.youtube.com/channel/UC180b0CfNLhTzVr8ehSbj1w" className="glightbox play-btn"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}
