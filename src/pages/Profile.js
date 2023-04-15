import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import './Profile.css';

export default function Profile() {
    const [uid,setUid] = useState("");
    const [email,setEmail] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [contact,setContact] = useState("");

    const fetchInfo = async(uuid) => {
        const moreInfo = await axios.get(`${process.env.REACT_APP_BASE_URL}/customer/get?uid=${uuid}`);
        const data = await moreInfo.data;
        // console.log(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setContact(data.contact);
    }

    useEffect(()=>{
        let iuid = localStorage.getItem("uid");
        let email1 = localStorage.getItem('email');
        setEmail(email1);
        setUid(iuid);
        fetchInfo(iuid);
    },[])

  return (
    <div style={{marginTop:"80px"}}>
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
      <div className="card p-4"> 
      <div className=" image d-flex flex-column justify-content-center align-items-center"> 
      <button className="btn btn-secondary"> 
      <img src="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-512.png" height="100" width="100" /></button> 
      <span className="name mt-3">{firstName} {lastName}</span> <span className="idd">@{email}</span> 
      <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
      <span className="idd1">{uid}</span> <span><i className="fa fa-copy"></i></span> 
      
      </div> <div className="d-flex flex-row justify-content-center align-items-center mt-3"> 
      <span className="number">{contact}</span> </div> 
      
      <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> 
      </div> <div className="text mt-3"> 
       </div>
       </div> 
       </div>
    </div>
    </div>
  )
}
