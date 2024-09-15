import React, { useEffect } from "react";
import './List_Product.css';
import { useState } from "react";
// import { useEffect } from "react";
import { All_product } from "../../components/assets/all_products";


export default function List_Product(){
    const [allproducts,setProducts] = useState([]);

    // const fetchInfo=async()=>{
    //     await fetch('http://localhost:4000/all_products').then((resp)=>resp.json())
    //     .then((data)=>{setAllProducts(data)});
    // }

    useEffect(() => {
        const fetchInfo = () => {
            let products = JSON.parse(localStorage.getItem('Products')) || [];
            console.log(products);
            setProducts(products);
        };
    
        fetchInfo();
    }, []);

    return(
        <div className="list-product">
            <h1 className="heading-1">All Products List</h1>
            <div className="listproduct-format-main">
                <p>Product</p>
                <p>Name</p>
                <p>Category</p>
                <p>New Price</p>
                <p> Old Price</p>
                <p>Remove</p>
            </div>
            <div className="list_product_all">
                <hr />
                {allproducts.map((product,index)=>{
                    return <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className="listproduct-icon" />
                        <p>{product.name}</p>
                        <p>{product.category}</p>
                        <p>${product.new_price}</p>
                        <p>${product.old_price}</p>
                        <i className="fas fa-times remove_icon"></i>
                        

                    </div>
                })}
            </div>

        </div>

    );
}
