import React from "react";
import './NewCollections.css'
import Item from '../item/item';
// import { useState } from "react";
import new_collection from "../assets/new_collection"
// import { useEffect } from "react";


const NewCollections = () => {
    // const [new_collections,setNew_Collection] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:4000/new_collections')
    //     .then((response)=>response.json())
    //     .then((data)=>setNew_Collection(data));
    // },[])

    return (
        <div className="new_collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item) => (
                    <Item 
                        key={item.id} // Add key for React to track elements
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price}
                    />
                ))}
            </div>

        </div>
    )
}

export default NewCollections
