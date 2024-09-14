import React from "react";
import './Breadcrums.css';

const Breadcrums = (props) => {
    
    // const {product} =props;
    const {product} =props;
    return (
        <div className="bread_crums">HOME
            <i className="fa fa-angle-right"></i>SHOP
            <i className="fa fa-angle-right"></i>{product.category}
            <i className="fa fa-angle-right"></i>{product.name}
        </div>
    )
}

export default Breadcrums
