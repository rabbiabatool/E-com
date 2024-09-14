import React, { useContext, useEffect, useRef, useState } from "react";
import './CartItems.css'
import { ShopContext } from "../../context/ShopContext";
import {loadStripe} from '@stripe/stripe-js';
import { All_product } from "../assets/all_products";

const CartItems = () => {
    const {getTotal,removeCart,display_cart,email} = useContext(ShopContext);
    const [cart_product, setCart] = useState([]); // Cart as an empty array initially
    const cartItemsref=useRef({});
    // const get_cart=useRef();
    const {getCart} =useContext(ShopContext);

    useEffect(() => {
        cartItemsref.current=display_cart();
        let email=localStorage.getItem('user-email');
        // get_cart.current=getCart();
      // Update cart items based on cartItems state
      const newCart = All_product.filter((e) => cartItemsref.current[e.id] > 0).map((e) => ({
        id: e.id,
        email:email,
        name: e.name,
        new_price: Number(e.new_price),
        quantity: cartItemsref.current[e.id] || 0
      }));
    
      setCart(newCart); // Update the cart state once
    }, [email,display_cart]);

    const paymentHandler = async () => {


        // here we will also pass cart_product
        // Load the Stripe object using the publishable key
        const stripe = await loadStripe("pk_test_51Phy2JAfxtUK8UfaHFh5eP82w1KVcElB81pEj2TWE4xMNT8CJQgUCd4uRElKbpocsRhQSAHSjmaSwb3MTPxcHqfQ00WZ2y9J2S");
        
        // price_1PyJUSAfxtUK8UfaSBynUoXn

        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                { 
                  price: 'price_1PyJUSAfxtUK8UfaSBynUoXn',  // Use your actual Price ID from Stripe dashboard
                  quantity: getCart()                      // Set the desired quantity
                }
            ],
            mode: 'payment',                              // This sets the mode to payment
            successUrl: 'http://localhost:3000/success',   // URL to redirect on successful payment
            cancelUrl: 'http://localhost:3000/cancel',     // URL to redirect if the customer cancels
        });
        
        // Check if there was an error during checkout
        if (error) {
            console.error('Error during checkout: ', error.message);
        }
        
        // // Prepare the request body and headers
        // const body = {
        //     products:cart_product
        // };
        // console.log("Products to be sent:", body.products);
        // const headers = {
        //     "Content-Type": "application/json"
        // };
        
        // try {
        //     // Send request to your server to create a checkout session
        //     const response = await fetch('http://localhost:4000/create-checkout-session', {
        //         method: 'POST',
        //         headers: headers,
        //         body: JSON.stringify(body)
        //     });
    
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
    
        //     const session = await response.json();
    
        //     // Redirect to Stripe Checkout
        //     const result = await stripe.redirectToCheckout({
        //         sessionId: session.id
        //     });
    
        //     if (result.error) {
        //         // Handle any errors from Stripe Checkout
        //         console.error(result.error.message);
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    };
    

    return (

        <div className="cart_items">
            <div className="cart_items_format_main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {All_product.map((e)=>{
                
                if(cartItemsref.current[e.id]>0)
                {
            
                    return <div>
                        <div className="cart_items_format cart_items_format_main">
                            <img src={e.image} alt="" className="cart_icon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cart_items_quantity">{cartItemsref.current[e.id]}</button>
                            <p>${e.new_price*cartItemsref.current[e.id]}</p>
                            <i className="fa fa-remove remove_icon" onClick={() => { removeCart(e.id) }}></i>
                        </div>
                    </div>
                }
                return null;

            })}
            <div className="cart_items_down">
                <div className="cart_items_total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cart_items_total_item">
                            <p>SubTotal</p>
                            <p>${getTotal()}</p>
                        </div>
                        <hr />
                        <div className="cart_items_total_item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart_items_total_item">
                            <h3>Total</h3>
                            <h3>${getTotal()}</h3>
                        </div>
                    </div>
                    <button onClick={()=>{paymentHandler()}}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart_items_promo">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cart_items_promo_box">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
