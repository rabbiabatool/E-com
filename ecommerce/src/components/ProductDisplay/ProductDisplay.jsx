import React, {useContext, useEffect} from "react";
import './ProductDisplay.css';
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {

    const {product} = props;
    // const {addToCart} = useContext(ShopContext);
    const {insert_user_data} =useContext(ShopContext);

    // useEffect(()=>{
    //     console.log("Email",Email);

    // },[])


    const handleAddToCart = () => {
        const email=localStorage.getItem('user-email');
        console.log("Email,product.id",email,product.id);
        insert_user_data(product.id); // Add item to user's cart
    };

    return (

        <div className="product_display">
            <div className="product_display_left">
                <div className="product_display_img_list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product_display_img">
                    <img className="product_display_main_img" src={product.image} alt="" />
                </div>
            </div>
            <div className="product_display_right">
                <h1>{product.name}</h1>
                <div className="product_display_right_star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>s
                    <i className="far fa-star"></i>
                    <p>(122)</p>
                </div>
                <div className="product_display_right_prices">
                    <div className="product_display_right_price_old">${product.old_price}</div>
                    <div className="product_display_right_price_new">${product.new_price}</div>
                </div>
                <div className="product_display_right_description">
                    <p>The dress features a high neckline, sleeveless design, and a flattering A-line silhouette. Pair it with some strappy heels and statement earrings for a night out, or dress it down with some sandals for a more casual look.</p>
                </div>
                <div className="product_display_right_size">
                    <h1>Select Size</h1>
                    <div className="product_display_right_sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                {/* <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button> */}
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className="product_display_right_category"><span>Category :</span> Women , T-shirt , Crop Top</p>
                <p className="product_display_right_category"><span>Tags :</span> Modern , Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
