import React, { useState } from "react";

import './Orders.css'

export default function Orders(){

    const [allOrders,setOrders]=useState([]);


    // useEffect(()=>{
    //     let users=JSON.parse(localStorage.getItem('users'));
    //     console.log(users);
    // },[]);
    return(
        <div className="orders">
            <h1>All Orders</h1>
            <div className="list format">
                <p>Customer Email</p>
                <p>Product id</p>
                <p>Product name</p>
                <p>Product price</p>
                <p>Product quantity</p>
            </div>
            <hr />
            <div className="all-orders">
                {
                    allOrders.map((o) => {
                        return <div className="order format">
                            <p>{o.email}</p>
                            <p>{o.id}</p>
                            <p>{o.name}</p>
                            <p>{o.price}</p>
                            <p>{o.quantity}</p>
                        </div>
                    })
                }
            </div>

        </div>

    );
}