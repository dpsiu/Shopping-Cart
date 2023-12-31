import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../src/App";
import { extractValidId } from "../components/ProductList";

export default function Checkout() {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    quantity,
    decrementQuantity,
    incrementQuantity,
  } = useContext(ShopContext);

  const subTotal = cartItems.reduce((total, item) => {
    return total + item.node.variants.edges[0].node.price.amount * 1;
  }, 0);

  function checkoutComplete() {
    const demoMessage =
      cartItems.length > 0
        ? "Thanks for viewing! Project demo completed."
        : "Your cart is empty!";
    alert(demoMessage);
  }

  function uniqueItems(items) {
    const itemCount = {};
    items.forEach((item) => {
      const itemId = item.node.id;

      if (!itemCount[itemId]) {
        itemCount[itemId] = [];
      }

      itemCount[itemId].push({
        title: item.node.title,
        id: item.node.id,
        price: item.node.variants.edges[0].node.price.amount,
        image: item.node.featuredImage.url,
        currencyCode: item.node.variants.edges[0].node.price.currencyCode,
      });
    });
    return itemCount;
  }

  const uniqueItemCount = uniqueItems(cartItems);

  return (
    <>
      <div className="checkout">
        <h3 className="shopping-cart">Shopping Cart: </h3>
        <div className="checkoutContent">
          <div className="itemsInCart">
            {Object.entries(uniqueItemCount).map(
              ([itemName, itemProperties]) => (
                <div className="cartItem" key={crypto.randomUUID()}>
                  <Link
                    to={`/ProductPage/${extractValidId(itemProperties[0].id)}`}
                  >
                    <img
                      src={itemProperties[0].image}
                      alt={itemProperties[0].title}
                    />
                  </Link>
                  <div className="cartItemInfo">
                    <h3 className="product-title">
                      {itemProperties[0].title} ({itemProperties.length})
                    </h3>
                    <p className="product-price">
                      ${itemProperties[0].price * itemProperties.length}{" "}
                      {itemProperties[0].currencyCode}
                    </p>
                    <button
                      className="removeProduct"
                      onClick={() => removeFromCart(itemName)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="cartTotal">
            <h3>Order Total: {cartItems.length} Item(s)</h3>
            <h3>Estimated Tax: TBD</h3>
            <h3>Shipping: TBD</h3>
            <h2 className="order-total">Subtotal: ${subTotal}</h2>
            <button className="checkout-btn" onClick={() => checkoutComplete()}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
