import React from "react";
// import { Cart } from "../components/Cart";

export default function Checkout() {
  const { cartItems } = Cart()

  function showCart() {
    console.log(cartItems.length)
  }
  return (
    <>
      {/* <h2>Checkout {cartItems.length}</h2>
      <button onClick={showCart}>Show Cart</button> */}
      <h2>Hi</h2>
    </>
  );
}