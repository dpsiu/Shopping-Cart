import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../src/App";
import { extractValidId } from "../components/ProductList"

export default function Checkout() {
  const { cartItems, removeFromCart } = useContext(ShopContext);
  const subTotal = cartItems.reduce((total, item) => {
    return total + item.node.variants.edges[0].node.price.amount * 5;
  }, 0);

  function checkoutComplete() {
    console.log(cartItems.length);
    const demoMessage =
      cartItems.length > 0
        ? "Thanks for viewing! Project demo completed."
        : "You haven't selected any items!";
    alert(demoMessage);
  }

  return (
    <>
      <div className="checkout">
        <h2>Shopping Cart: </h2>
        <div className="checkoutContent">
          <div className="itemsInCart">
            {cartItems.map((item) => (
              <div className="cartItem" key={crypto.randomUUID()}>
                <Link
                    to={`/ProductPage/${extractValidId(item.node.id)}`}
                  >
                  <img
                    src={item.node.featuredImage.url}
                    alt={item.node.title}
                  />
                </Link>

                <img src={item.node.featuredImage.url} alt={item.node.title} />
                <div className="cartItemInfo">
                  <h2>{item.node.title}</h2>
                  <p>
                    Price: ${item.node.variants.edges[0].node.price.amount * 5}{" "}
                    {item.node.variants.edges[0].node.price.currencyCode}
                  </p>
                  <button
                    className="removeProduct"
                    onClick={() => removeFromCart(item)}
                  >
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
