import React,{useEffect, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Footer from '../components/Footer';
// import {postDataToFirebase} from '../config/config';
import axios from 'axios';

export default function PartyDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const{item} = location.state;
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [address,setAddress] = useState("");
  const [message,setMessage] = useState("");
  const [sucess,setSucess] = useState(false);

  const postDataToFirebase = async(dbName,value,e) => {
    e.preventDefault();
     const data = await fetch(`https://vpart-ccd34-default-rtdb.firebaseio.com/${dbName}.json`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(value)
     });
     const body1 = await data.body;
    //  console.log(data);
    //  console.log(body1);
  }

  const fetchInfo = async() => {
    const uuid = localStorage.getItem("uid");
    const moreInfo = await axios.get(`${process.env.REACT_APP_BASE_URL}/customer/get?uid=${uuid}`);
    const data = await moreInfo.data;
    setName(`${data.firstName} ${data.lastName}`);
    setEmail(data.email);
    setPhone(data.contact);
}

  const makeOrder = async(e) => {
    e.preventDefault();
    if(date == null || date == ""){
      alert("Date Missing")
      return;
    }

    if(time == null || time == ""){
      alert("Time Missing")
      return;
    }

    if(address == null || address == ""){
      alert("Address Missing")
      return;
    }

    if(message == null || message == ""){
      alert("Additional Message Missing")
      return;
    }

    const myOrder = {
      name,
      email,
      phone,
      date,
      time,
      address,
      message,
      'uid':localStorage.getItem("uid"),
      'status':'Ordered',
      item
    }
    // console.log(myOrder);
    const data = await fetch(`${process.env.REACT_APP_BASE_URL}/order/post`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(myOrder)
    });
    const res = await data.json();
    // console.log(res);
    setSucess(true);
    navigate(`/confirm`,{state:{'id':res.uuid}})
  }

  useEffect(() => {
    AOS.init();
    fetchInfo();
    
  }, [])


  return (
    <section id="about" className="hero about">
    <div className="container" data-aos="fade-up" >
      <div className="row gy-4">
        <div className="col-lg-7 position-relative about-img" style={{backgroundImage: `url(${item.full_image})`}} /*data-aos="fade-up" data-aos-delay="150" */>
          <div className="call-us position-absolute">
            <h4>Book your Party</h4>
            <p>+91 9939482302</p>
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
          This package of product includes cakes and all variety of decoratives to make your dat memorable. Try out 
          from out variety of options and let us know your experience. You can find the details of item contained with this
          package in Bundle contains section.
        </p>
    </div>
    {/* Shipping Details */}
      <section id="book-a-table" className="book-a-table">
      {localStorage.getItem('uid')?<div className="container" data-aos="fade-up" >
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
                    defaultValue={name}
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
                     defaultValue={email}
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
                    defaultValue={phone}
                    placeholder="Your Phone" 
                    data-rule="minlen:4" 
                    data-msg="Please enter at least 4 chars" 
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <label>Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    className="form-control" 
                    id="date" 
                    placeholder="Date when party to happen" 
                    data-rule="minlen:4" 
                    data-msg="Please enter at least 4 chars" 
                    onChange={(e)=>setDate(e.target.value)}
                    required={true}
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <label>Time</label>
                  <input 
                    type="time" 
                    className="form-control" 
                    name="time" 
                    id="time" 
                    placeholder="Tentaive Time" 
                    data-rule="minlen:4" 
                    data-msg="Please enter at least 4 chars"
                    onChange={(e)=>setTime(e.target.value)}
                    required={true}
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
                  required={true}
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
                   required={true}
                   ></textarea>
                <div className="validate"></div>
              </div>
              {/* <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              </div> */}
              <br />
              <div className="text-center"><button type='submit' className='btn btn-danger' onClick={(e)=>makeOrder(e)} >Book Now</button></div>
            </form>
          </div>

        </div>

      </div>:<center><div>Login to place order <Link to="/login">Click here</Link></div> </center>}
    </section>
    {/* End Shipping details */}
  </section>
  )
}
