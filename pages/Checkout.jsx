import React, { useState, useContext } from "react";
import { ShopContext } from "../src/App";

export default function Checkout() {
  const { cartItems, removeFromCart } = useContext(ShopContext);
  const subTotal = cartItems.reduce((total, item) => {
    return total + item.node.variants.edges[0].node.price.amount * 5;
  }, 0);

  function checkoutComplete() {
    alert("Thanks for viewing! Project demo completed.");
  }

  return (
    <>
      <div className="checkout">
        <h2>Shopping Cart: </h2>
        <div className="checkoutContent">
          <div className="itemsInCart">
            {cartItems.map((item) => (
              <div className="cartItem" key={crypto.randomUUID()}>
                <img src={item.node.featuredImage.url} alt={item.node.title} />
                <div className="cartItemInfo">
                  <h2>{item.node.title}</h2>
                  <p>
                    Price: ${item.node.variants.edges[0].node.price.amount * 5}{" "}
                    {item.node.variants.edges[0].node.price.currencyCode}
                  </p>
                  <button
                    className="removeProduct"
                    onClick={() => removeFromCart(item)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cartTotal">
            <h3>Subtotal: ${subTotal}</h3>
            <button onClick={() => checkoutComplete()}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
