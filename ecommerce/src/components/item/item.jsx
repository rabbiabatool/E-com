import React from "react";
import './item.css';
import { Link } from "react-router-dom";



const Item = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className="item">
            <Link to={`/product/${id}`}><img  onClick ={window.scrollTo(0,0)} src={image} alt={name} /></Link>
            <p>{name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${new_price.toFixed(2)}
                </div>
                <div className="item-price-old">
                    ${old_price.toFixed(2)}
                </div>
                
            </div>
        </div>
    );
};

export default Item;





// import React from "react";
// import './item.css'
// const Item = (props) => {
//     return (
//         <div>
//             <div className="item">
//                 <img src={props.image} alt="" />
//                 <p>{props.name}</p>
//                 <div className="item-prices">
//                     <div className="item-price-new">
//                         ${props.new_price}
//                     </div>
//                     <div className="item-price-old">
//                         ${props.new_price}
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default Item
