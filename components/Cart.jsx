import React, { useState, useEffect } from "react";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("Updated cartItems:", cartItems)
    console.log(cartItems.length)
  }, [cartItems]);


//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//     // setCartItems((currentCartItems) => {
//     //   return [...currentCartItems, product];
//     // });
    
//   };

//   return { cartItems, addToCart };
};
