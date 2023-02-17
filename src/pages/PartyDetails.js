import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
import {postDataToFirebase} from '../config/config';

export default function PartyDetails() {
  const location = useLocation();
  const{item} = location.state;
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [address,setAddress] = useState("");
  const [message,setMessage] = useState("");

  const makeOrder = async(e) => {
    e.preventDefault();
    const myOrder = {
      name,
      email,
      phone,
      date,
      time,
      address,
      message
    }
    console.log(myOrder);
    const data = await fetch("http://localhost:8080/order/post",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(myOrder)
    });
    const res = await data.json();
    console.log(res);
  }

  useEffect(() => {
    AOS.init();
    
  }, [])


  return (
    <section id="about" className="hero about">
    <div className="container" data-aos="fade-up" >
      <div className="row gy-4">
        <div className="col-lg-7 position-relative about-img" style={{backgroundImage: `url(${item.full_image})`}} /*data-aos="fade-up" data-aos-delay="150" */>
          <div className="call-us position-absolute">
            <h4>Book your Party</h4>
            <p>+91 7488210620</p>
          </div>
        </div>
         <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300"  >
          <div className="content ps-0 ps-lg-5">
          <div className="section-header">
                <h3>Bundle Contains</h3>
          </div>
            <p className="fst-italic">
              Items Avaialble with this package are
            </p>
            <ul>
              {item.items.map((itm) => {return <li><i className="bi bi-check2-all"></i> {itm}</li>})}
            </ul>
            <p className="party-details-price">
                {item.price}
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Description */}
    <div className='container'>
        <div className="section-header">
              <h2>Description</h2>
        </div>
        <p>
        No matter the size of your online store, product descriptions play a key role in your ecommerce business.

      Effective product descriptions can possibly lure potential customers. Good product descriptions can potentially influence a purchase decision. Great product descriptions can ultimately help improve conversion rates and increase sales, as well as boost your visibility and SEO on paid channels.

        The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.
        </p>
    </div>
    {/* Shipping Details */}
      <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up" >
        <div className="section-header">
          <h2>Shipping Details</h2>
        </div>
        <div className="row g-0">
          <div className="col-lg-4 reservation-img" style={{backgroundImage: 'url(https://www.pngfind.com/pngs/m/123-1233674_happy-birthday-png-balloons-birthday-party-png-transparent.png)'}} data-aos="zoom-out" data-aos-delay="200" ></div>
          <div className="col-lg-8 d-flex align-items-center reservation-form-bg">
            <form  className="php-email-form" data-aos="fade-up" data-aos-delay="100"  >
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Your Name" 
                    data-rule="minlen:4" 
                    data-msg="Please enter at least 4 chars" 
                    onChange={(e)=>setName(e.target.value)}  
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                     type="email" 
                     className="form-control" 
                     name="email" 
                     id="email" 
                     placeholder="Your Email" 
                     data-rule="email" 
                     data-msg="Please enter a valid email" 
                     onChange={(e)=>setEmail(e.target.value)}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input 
                    type="text" 
                    className="form-control" 
                    name="phone" 
                    id="phone" 
                    placeholder="Your Phone" 
                    data-rule="minlen:4" 
                    data-msg="Please enter at least 4 chars" 
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input 
                    type="text" 
                    name="date" 
                    className="form-control" 
                    id="date" 
                    placeholder="Date when party to happen" 
                    data-rule="minlen:4" 
                    data-msg="Please enter at least 4 chars" 
                    onChange={(e)=>setDate(e.target.value)}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <input 
                    type="text" 
                    className="form-control" 
                    name="time" 
                    id="time" 
                    placeholder="Tentaive Time" 
                    data-rule="minlen:4" 
                    data-msg="Please enter at least 4 chars"
                    onChange={(e)=>setTime(e.target.value)}
                    />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea 
                  className="form-control" 
                  name="Shipping Address" 
                  rows="5" 
                  placeholder="Shipping Address"
                  onChange={(e) =>setAddress(e.target.value)}
                  ></textarea>
                <div className="validate"></div>
              </div>
              <div className="form-group mt-3">
                <textarea
                   className="form-control" 
                   name="Additional Message" 
                   rows="5" 
                   placeholder="Message"
                   onChange={(e)=>setMessage(e.target.value)}
                   ></textarea>
                <div className="validate"></div>
              </div>
              {/* <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              </div> */}
              <br />
              <div className="text-center"><button className='btn btn-danger' onClick={(e)=>makeOrder(e)} >Book Now</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    {/* End Shipping details */}
  </section>
  )
}
