import React from 'react'

export default function OrderedItem({item}) {
  return (
    <div className='card'>
        <div className='card-header'>
            {item.item.name}
        </div>
        <div className='card-body'>
            <div className='row'>
                <div className='col-md-3'>
                    <img src={item.item.logo_url} style={{width:"100%"}} />
                </div>
                <div className='col-md-9'>
                    <p><b>orderId:</b> {item.orderId}</p>
                    <p><b>Address:</b> {item.address}</p>
                    <p><b>Contact: </b> {item.phone}</p>
                    <h5>Party Date & Time : {item.date} {item.time} </h5>
                    <h1>Price: {item.item.price}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
