import React, { createContext, useState,useEffect } from "react";
// import { useEffect } from "react";
import { All_product } from "../components/assets/all_products";
// import { useNavigate } from "react-router-dom";



export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index=0; index < 20+1; index++){
        cart[index]= 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {


    // const [all_products,setAllProducts] = useState([]);
    // const [cartItems,setCartItems] =useState(getDefaultCart());
    const email= localStorage.getItem('user-email'); // Store email in state
    const [users, setUsers] = useState([{
      email: "",        // Email is initially an empty string
      cartItems: getDefaultCart() // cartItems is an object with default values from `getDefaultCart()`
    }]); // Store users and their carts
    // const navigate=useNavigate();
  
    // Function to add/update user's email and cart items
  
    // Function to associate the email (call on login/signup)
    // const adding_email = (userEmail) => {
      
    //   setEmail(userEmail);
    //   console.log("email",userEmail);
      
    // };
  
    // Function to display cart items for the given user
    const display_cart = () => {
  
      const user = users.find((u) => u.email === email);
      return user ? user.cartItems : getDefaultCart();
    };

    const removeEmptyUsers = () => {
      setUsers((prevUsers) => {
          return prevUsers.filter(user => user.email !== '');
      });
    };

  // Call removeEmptyUsers once when the component mounts
   useEffect(() => {
      removeEmptyUsers();
    },[]);

    // useEffect(() => {
    //   const fetchInfo = () => {
    //     if (email) {
    //       const userCart = display_cart();
    //       setCartItems(userCart);
    //     }
    //   };
    
    //   fetchInfo();
    // });
  



    // useEffect(()=>{

    //     fetch('http://localhost:4000/all_products')
    //     .then((response)=>response.json())
    //     .then((data)=>setAllProducts(data))

    //     if(localStorage.getItem('auth-token')){
    //         fetch('http://localhost:4000/getCart',{
    //             method:'POST',
    //             headers:{
    //                 Accept:'application/form-data',
    //                 'auth-token': `${localStorage.getItem('auth-token')}`,
    //                 'Content-Type':'application/json',
    //             },
    //             body:"",
    //         })
    //         .then((response)=>response.json())
    //         .then((data)=>setCartItems(data))
    //     }
    // },[])

    // const addToCart = (itemId) => {
    
        
    //     if(localStorage.getItem('auth-token')){

    //         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    //         fetch('http://localhost:4000/add_to_cart',{
    //             method:'POST',
    //             headers:{
    //                 Accept:'application/form-data',
    //                 'auth-token': `${localStorage.getItem('auth-token')}`,
    //                 'Content-Type':'application/json',
    //             },
    //             body:JSON.stringify({"itemId":itemId}),
                
    //         })
    //         .then((response)=>response.json())
    //         .then((data)=>console.log(data))
    //     }
    //     else{

    //         window.location.replace("/login");
    
    //     }
    // };
    const insert_user_data = (itemId) => {
      // Retrieve and parse the user data from localStorage
      let users = JSON.parse(localStorage.getItem('users')) || []; // Default to an empty array if no users in storage
  
      if (!email) {
        window.location.replace("/login");
        return;
      }
  
      // Find if the user exists
      const existingUserIndex = users.findIndex((u) => u.email === email);
  
      if (existingUserIndex > -1) {
        // User exists, update their cartItems
        const updatedCartItems = {
          ...users[existingUserIndex].cartItems,
          [itemId]: (users[existingUserIndex].cartItems[itemId] || 0) + 1
        };
  
        // Create a new users array with the updated user
        const updatedUsers = [
          ...users.slice(0, existingUserIndex),
          { ...users[existingUserIndex], cartItems: updatedCartItems },
          ...users.slice(existingUserIndex + 1)
        ];
  
        // Update localStorage and state
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
  
      } else {
        // User does not exist, add a new user with initial cartItems
        const newUser = {
          email: email,
          cartItems: { ...getDefaultCart(), [itemId]: 1 }
        };
  
        const updatedUsers = [...users, newUser];
  
        // Update localStorage and state
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
      }
    };

    const removeCart = (itemId) => {
      // Retrieve and parse the users from localStorage
      let users = JSON.parse(localStorage.getItem('users')) || []; // Default to an empty array if no users in storage
    
      if (!email) {
        // If no email is available, redirect to login
        window.location.replace("/login");
        return;
      }
    
      // Find if the user exists
      const existingUserIndex = users.findIndex((u) => u.email === email);
    
      if (existingUserIndex > -1) {
        // User exists, update their cartItems
        const user = users[existingUserIndex];
        const currentQuantity = user.cartItems[itemId] || 0;
        
        // Only update if the item quantity is greater than 0
        const updatedCartItems = {
          ...user.cartItems,
          [itemId]: Math.max(currentQuantity - 1, 0) // Ensure quantity doesn't go below 0
        };
    
        // Create a new users array with the updated user
        const updatedUsers = [
          ...users.slice(0, existingUserIndex),
          { ...user, cartItems: updatedCartItems },
          ...users.slice(existingUserIndex + 1)
        ];
    
        // Update localStorage and state
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
      }

   
      
        // setCartItems((prev) => ({...prev, [itemId]:prev[itemId]- 1}));

        // if(localStorage.getItem('auth-token')){
        //     fetch('http://localhost:4000/removeCart',{
        //         method:'POST',
        //         headers:{
        //             Accept:'application/form-data',
        //             'auth-token': `${localStorage.getItem('auth-token')}`,
        //             'Content-Type':'application/json',
        //         },
        //         body:JSON.stringify({"itemId":itemId}),
                
        //     })
        //     .then((response)=>response.json())
        //     .then((data)=>console.log(data))
        // }
        
    };
    
    
    const getTotal = () => {

        let Total = 0;
        let user=users.find((e)=>e.email===email);
        if(user){

            for (const itemId in user.cartItems) {
    
                if (user.cartItems[itemId] > 0) {
                    console.log('hello');
                    let itemInfo = All_product.find((product) => product.id === Number(itemId));
                    
                      Total += Number(itemInfo.new_price) * user.cartItems[itemId];
                    
                }
            }
        }

        return Total;
    };

    const getCart = () => {
        let total = 0;
        let user=users.find((e)=>e.email===email);
        if(user){

            for(const item in user.cartItems){
                if(user.cartItems[item]>0){
                    total+=user.cartItems[item];
                }
            }
        }

        return total;
    };
    
    const contextValue = {getCart,display_cart,insert_user_data,getTotal,removeCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

    
};
export default ShopContextProvider;



