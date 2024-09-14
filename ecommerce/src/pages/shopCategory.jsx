import React, {useContext} from "react";
import './CSS/ShopCategory.css'
// import { ShopContext} from "../context/ShopContext"
// import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/item/item'
import { All_product } from "../components/assets/all_products";


const ShopCategory = (props) => { // Correctly pass props
    // const {all_products} = useContext(ShopContext); // Use useContext

    return (

        
        <div className="shop_category">
            <img className="shopCategory_banner" src={props.banner} alt="" />
            <div className="shopCategory_indexSort">
                <p>
                    <span>
                        Showing 1-12
                    </span>
                    out of 36 products
                </p>
                <div className="shopCategory_sort"> Sort by
                    <i className="fa fa-angle-down"></i>
                </div>
            </div>
            <div className="shopCategory-products">
                {All_product.map((item) => {
                    if (props.category === item.category) {
                        return (
                            <Item 
                                key={item.id} // Use key prop
                                id={item.id} 
                                name={item.name} 
                                image={item.image} 
                                new_price={item.new_price} 
                                old_price={item.old_price}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopCategory-load_more">
                Explore More
            </div>
        </div>
    );
}

export default ShopCategory;
