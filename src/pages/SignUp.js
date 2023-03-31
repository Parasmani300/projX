import axios from 'axios';
import React, { Component, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUpNow } from '../config/firebaseConfig';
export default function SignUp() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const signUpUser = async() => {
        if(email != "" && password != "")
        {
          await signUpNow(email,password,firstName,lastName,contact,axios,navigate);
      }
    }


    return (
        <div className='container row' style={{marginTop:"8rem",marginBottom:"4rem"}}>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
            <div className='card'>
        <div className='card-body'>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Contact Number:</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter contact"
            onChange={(e)=>setContact(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={()=>signUpUser()}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
        </div>
      </div>
            </div>
            <div className='col-md-3'></div>
        </div>
      
    )
}