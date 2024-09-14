import React, { useEffect } from 'react'
import { useState } from 'react'
import upload_area from '../../assets/upload_area.jpg';
import './Add_Product.css'

let newImage;

function Add_Product() {

    useEffect(()=>{

        let products=JSON.parse(localStorage.getItem('Products'))|| [];

        const modified=products.slice(1);
        products=modified;

        localStorage.setItem('Products',JSON.stringify(products));

    },[])

    const [image,setImage] =useState(false);
    const [productDetails, setProductDetails] = useState([{
        id: -1,
        name: "",
        category: "women",
        image: "",
        new_price: "",
        old_price: ""
    }]);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        // Update the corresponding product detail based on input name
        setProductDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const ProductSetter = () => {
        let Id = localStorage.getItem('product-id');
        Id = Id ? parseInt(Id) : 0; // Ensure Id is a number
    
        const newId = Id + 1;
        localStorage.setItem('product-id', newId); // Save the new product ID
    
        // Ensure all fields are properly set when adding the product
        const updatedProduct = {
            id: newId,
            name: productDetails.name || "",  // Fallback to empty string if undefined
            image: newImage || "",  // Use newImage if set, otherwise use what's in productDetails
            category: productDetails.category || "women",  // Default to "women"
            new_price: productDetails.new_price || "",  // Fallback to empty string if undefined
            old_price: productDetails.old_price || ""   // Fallback to empty string if undefined
        };
    
        // Fetch the existing products from local storage and add the new product
        let products = JSON.parse(localStorage.getItem('Products')) || [];
        products.push(updatedProduct);
        localStorage.setItem('Products', JSON.stringify(products));
    
        // Reset the productDetails state
        setProductDetails([{
            id: -1,
            name: "",
            category: "women",
            image: "",
            new_price: "",
            old_price: ""
        }]);

        alert("Product added successfully");
    
        console.log("Updated Products:", products);
    };
    

    const ImageSetter=(file)=>{

        newImage = URL.createObjectURL(file);


    }

    // const AddProduct=async()=>{
    //     let product = {
    //         ...productDetails,
    //         name: productDetails.name.toString(),
    //         category:productDetails.category.toString(),
    //         new_price: productDetails.new_price.toString(),
    //         old_price: productDetails.old_price.toString()
    //     };
      
        
    //     let responseData;

    //     const formdata=new FormData();
    //     formdata.append('profile',image);

    //     await fetch('http://localhost:4000/upload',{
    //         method:'POST',
    //         headers:{
    //             Accept:'application/json'
    //         },
    //         body:formdata
    //     }).then((resp)=>resp.json()).then((data)=>responseData=data)

    //     console.log("data",product);

    //     if(responseData.success){
    //         product.image=responseData.profile_url;
    //         await fetch('http://localhost:4000/add_product',{
    //             method:'POST',
    //             headers:{
    //                 Accept:'application/json',
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify(product)

    //         }).then((resp)=>resp.json()).then((data)=>{
    //             data.success?alert("Product added"):alert("Failed")
    //         })

    //     }



    // }

    const imageHandler = (e) => {

        
        const object=e.target.files[0];
        setImage(object);

        ImageSetter(object);
        
        // Store the URL instead of the file

    }
 

  return (
    <div className="add-product">
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>

          <div className="addproduct-itemfield">
              <p>Product Category</p>
              <select name="category" value={productDetails.category} onChange={changeHandler} className='selector'>
                  <option value="women">Women</option>
                  <option value="men">Men</option>
                  <option value="kid">Kid</option>
              </select>
          </div>

          <div className="addproduct-itemfield">
            <p>Old Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
          </div>

          <div className="addproduct-itemfield">
            <p>New Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
          </div>

          <div className="addproduct-itemfield">
            <label htmlFor='file-input'>
                <img src={image?URL.createObjectURL(image):upload_area} style={{width:"40px",height:"40px"}} alt="" className='thumbnail-img' />
            </label>
            <input type="file" onClick={imageHandler} name='image' id='file-input' hidden />
                  
          </div>

          <button className='add_btn' onClick={ProductSetter}>ADD</button>
        
    </div>
  )
}

export default Add_Product
