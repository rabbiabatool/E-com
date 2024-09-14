import React from "react";
import './RelatedProducts.css'
import { Data_product }  from "../assets/data"
import Item from "../item/item"



const RelatedProducts = () => {
    return (
            <div className="related_products">
                <h1>Related Products</h1>
                <hr />
                <div className="related_products_item">
                    {Data_product.map((item) => (
                            <Item 
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price} 
                            />
                    ))};
                </div>
            </div>
        );
}

export default RelatedProducts
