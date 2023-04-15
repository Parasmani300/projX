import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import OrderedItem from '../components/OrderedItem';

export default function ConfirmOrder () {
    const location = useLocation();
    const [data,setData] = useState([]);
    const [fetched,setFetched] = useState(false);
    const fetch = async() => {
        const snap = await axios.get(`${process.env.REACT_APP_BASE_URL}/order/getOrderById?uid=${location.state.id}`);
        const res = await snap.data;
        setData(res);
        // console.log(res);
        setFetched(true);
    }
    useEffect(()=>{
        fetch()
    },[])
  return (
    <div style={{marginTop:"100px"}}>
        {fetched &&  data?.map(order => {
            return <div className='container'>
                <h1>Hurry!! Order Placed. Find More details in My Orders</h1>
                <OrderedItem item={order} />
            </div>
        })}
    </div>
  )
}
