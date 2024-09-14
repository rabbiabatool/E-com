import React from "react";
import './Navbar.css';
import profile from '../../assets/profile.jpg';
import logo from '../../assets/logo.jpg';


export default function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} alt="" className="image" />
            <img src={profile} alt="" className="image"/>
        </div>
    );
}