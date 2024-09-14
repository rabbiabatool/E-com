import React from "react";
import './footer.css'; // Import a CSS file to handle your styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>Quick Links</h3>
                    <p><i className="fas fa-angle-right"></i> Shop</p>
                    <p><i className="fas fa-angle-right"></i> Men</p>
                    <p><i className="fas fa-angle-right"></i> Women</p>
                    <p><i className="fas fa-angle-right"></i> Kids</p>
                </div>
                <div className="box">
                    <h3>Extra Links</h3>
                    <p><i className="fas fa-angle-right"></i> Ask Questions</p>
                    <p><i className="fas fa-angle-right"></i> Privacy Policy</p>
                    <p><i className="fas fa-angle-right"></i> Terms of Use</p>
                    <p><i className="fas fa-angle-right"></i> About Us</p>
                </div>
                <div className="box">
                    <h3>Contact Info</h3>
                    <p><i className="fas fa-phone"></i> +7899877</p>
                    <p><i className="fas fa-phone"></i> +7133467</p>
                    <p><i className="fas fa-envelope"></i> rabbiabatool875@gmail.com</p>
                    <p><i className="fas fa-map"></i> Mumbai, India - 400104</p>
                </div>
                <div className="box">
                    <h3>Follow Us</h3>
                    <p><i className="fab fa-facebook-f"></i> Facebook</p>
                    <p><i className="fab fa-twitter"></i> Twitter</p>
                    <p><i className="fab fa-instagram"></i> Instagram</p>
                    <p><i className="fab fa-linkedin"></i> LinkedIn</p>
                </div>
            </div>
            <div className="credit">
                Created by <span>Mr. Web Designer</span> | All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
