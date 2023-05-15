import React,{useEffect, useState} from 'react'
import '../App.css';
import './main1.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
  const [loggedIn,setLoggedIn] = useState(false);
  const location = useLocation();
  const [toggle,setToggle] = useState(false)

  const logOutUser = () => {
    localStorage.removeItem("uid");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        setLoggedIn(false);
        setToggle(false)
  }

  useEffect(() => {
    AOS.init();

    const checkLoggedIn = localStorage.getItem("token");
    // console.log('checkLoggedIn' + checkLoggedIn);
    if(checkLoggedIn !== ""){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
    setToggle(false);
  }, [])


  return (
    <div>{!toggle?
    <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
         <img src="https://firebasestorage.googleapis.com/v0/b/goforstar-4e890.appspot.com/o/logoparty.jpg?alt=media&token=5df404d8-d046-4931-bef6-1a0b5cbbb08c" alt="logo" />
        <h1>GoForStar<span>.</span></h1>
      </Link>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu" >Options</a></li>
          <li><a href="#events">Events</a></li>
          {localStorage.getItem("token")&& <li><a href="/orders">MyOrders</a></li>}
          {localStorage.getItem("token")?<li><Link to="/" onClick={()=>logOutUser()}>Logout</Link></li>:<li><Link to="login">Login</Link></li>}
          {localStorage.getItem("token") && <li><Link to="/profile" onClick={()=>setToggle(false)}>Profile</Link></li>}
        </ul>
      </nav>
      {/* <Link className="btn-book-a-table" to="/">Book Now</Link> */}
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={()=>setToggle(!toggle)}></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>:<div className='pt-3 nav fixed-top' style={{width:"100%",height:"720px",backgroundColor:"grey",opacity:"0.8"}}>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list text-white" onClick={()=>setToggle(!toggle)}></i>
        <ul className="mt-4" style={{listStyleType:"none"}}>
          <li><Link to="/" className='text-white' onClick={()=>setToggle(false)} ><h4>Home</h4></Link></li>
          <li><a href="#about" className='text-white' onClick={()=>setToggle(false)}><h4>About</h4></a></li>
          <li><a href="#menu" className='text-white' onClick={()=>setToggle(false)}><h4>Options</h4></a></li>
          <li><a href="#events" className='text-white' onClick={()=>setToggle(false)}><h4>Events</h4></a></li>
          {localStorage.getItem("token")&& <li><a href="/orders" className='text-white' onClick={()=>setToggle(false)}><h4>MyOrders</h4></a></li>}
          {localStorage.getItem("token")?<li><Link to="/" className='text-white' onClick={()=>logOutUser()}><h4>Logout</h4></Link></li>:<li><Link className='text-white' to="login" onClick={()=>setToggle(false)}><h4>Login</h4></Link></li>}
          {localStorage.getItem("token") && <li><Link to="/profile" className='text-white' onClick={()=>setToggle(false)}><h4>Profile</h4></Link></li>}
        </ul>    
    </div>}
    </div>
  )
}
