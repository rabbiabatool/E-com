import React, { useContext, useState, useRef } from "react";
import { Outlet,Link } from "react-router-dom";
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {

    
    const [menu,setMenu] = useState("shop");
    const {getCart} = useContext(ShopContext);
    const menuRef = useRef();
    const drop_down = (e) => {

        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }

    return (
    <>

        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <i className="fa fa-bars nav_drop" onClick={drop_down}></i>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration : 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration : 'none'}} to='/men'>Men</Link>{menu==="mens"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration : 'none'}} to='/women'>Women</Link>{menu==="women"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration : 'none'}} to='/kid'>Kids</Link>{menu==="kids"?<hr></hr>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('user-email')?<button onClick={()=>{localStorage.removeItem('user-email');window.location.replace('/')}}>logout</button>:<Link style={{textDecoration:'none'}} to='/login'><button>login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getCart()}</div>
            </div>
        </div>
        <Outlet />
    </>

    )
}

export default Navbar