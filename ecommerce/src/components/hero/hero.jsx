import React from "react";
import './hero.css'
import Hand_image from '../assets/hand_icon.png'
// import Arrow from '../assets/arrow_icon.png'
import Hero_image from '../assets/hero_image.png'

const Hero = () => {
    return (

        <div>
            <div className="hero">
                <div className="hero-left">
                    <h2>New Arrivals Only</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                            <img src={Hand_image} alt="" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collections</div>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={Hero_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero