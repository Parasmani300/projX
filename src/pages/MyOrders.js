import axios from 'axios';
import React, { useEffect, useState } from 'react'
import OrderedItem from '../components/OrderedItem'

export default function MyOrders() {
    const [order,setOrder] = useState([]);
    const [shipped,setShipped] = useState([]);
    const [delivered,setDelivered] = useState([]);

    const getOrderedItem = async() => {
        const uid = localStorage.getItem("uid");
        const url = `${process.env.REACT_APP_BASE_URL}/order/getForUser?uid=${uid}`;
        const snapShot = await axios.get(url);
        const data = await snapShot.data;
        console.log(data);
        setOrder(data);
    }

    const getShippedData = async() => {
        const uid = localStorage.getItem("uid");
        const url = `${process.env.REACT_APP_BASE_URL}/order/getShippedOrderForUser?uid=${uid}`;
        const snapShot = await axios.get(url);
        const data = await snapShot.data;
        console.log(data);
        setShipped(data);
    }

    const getDeliveredData = async() => {
        const uid = localStorage.getItem("uid");
        const url = `${process.env.REACT_APP_BASE_URL}/order/getDeliveredOrderForUser?uid=${uid}`;
        const snapShot = await axios.get(url);
        const data = await snapShot.data;
        console.log(data);
        setDelivered(data);
    }

    useEffect(()=>{
        getOrderedItem();
        getShippedData();
        getDeliveredData();
    },[]);

  return (
    <div className='container' style={{marginTop:"120px"}}>
        <h1>Ordered</h1>
        <div className='row'>
            {order?.map((item,key)=><OrderedItem key={key} item={item} />)}
        </div>
        <h1>Shipped</h1>
        <div className='row'>
            {shipped?.map((item,key)=><OrderedItem key={key} item={item} />)}
        </div>
        <h1>Delivered</h1>
        <div className='row'>
            {delivered?.map((item,key)=><OrderedItem key={key} item={item} />)}
        </div>
    </div>
  )
}
