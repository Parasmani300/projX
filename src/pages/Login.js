import React, { Component, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { emailPasswordSignIn } from '../config/firebaseConfig';
export default function  Login(){
    const navigate = useNavigate();
    let [userName,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [user,setUser] = useState({});

    const loginNow = () =>{
        if(userName && userName != "" && password && password != ""){
            emailPasswordSignIn(userName,password,navigate);
        }
    }

    return (
      <div className='container row' style={{marginTop:"8rem",marginBottom:"4rem"}}>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='card '>
                    <center><h3>Sign In</h3></center>
                    <div className='card-body'>
                    <div className="mb-3">
                    <label style={{fontSize:"20px"}}>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                    <label  style={{fontSize:"20px"}}>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                        Remember me
                        </label>
                        </div>
                    </div>
                <div className="d-grid">
                <button  className="btn btn-primary" onClick={()=>loginNow()}>
                    Login
                </button>
                </div>
                <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-right">
                    New user <Link to="/signup">Singup?</Link>
                </p>
                </div>
            </div>
            </div>
            <div className='col-md-3'></div>
      </div>
    )
}