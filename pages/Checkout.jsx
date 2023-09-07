import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../src/App";
import { extractValidId } from "../components/ProductList";

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

  // function uniqueItems(items) {
  //   const itemCount = [];
  //   items.forEach((item) => {
  //     const itemName = item.node.title;
  //     const itemId = item.node.id
  //     itemCount[itemName] = (itemCount[itemName] || 0) + 1;
  //   });
  //   console.log(itemCount);
  //   return itemCount;
  // }
  function uniqueItems(items) {
    const itemCount = {};
    items.forEach((item) => {
      const itemName = item.node.title;
      
      if (!itemCount[itemName]) {
        itemCount[itemName] = []
      }

      // itemCount[itemName] is each unique item, ie, shirt, pants, etc
      // as an array with X objects (each instance of shirt, pants, etc)

      itemCount[itemName].push({
        title: item.node.title,
        id: item.node.id,
        price: item.node.variants.edges[0].node.price.amount * 5,
        image: item.node.featuredImage.url,
        currencyCode: item.node.variants.edges[0].node.price.currencyCode,
      })
    });
    console.log(itemCount);
    return itemCount;
  }

  // Render cart items as array or object turned into array?
  // uniqueItems(cartItems) returns the name for each item and its quantity
  // But missing the original obj properties?
  // How might I maintain the itemCount + original object properties?
  // Should I have itemName contain the itemName, itemCount, and 
    // another obj within with all properties? {}
    // Or set each item.node.property to itemURL, itemPrice, etc.

    // Assume I want to render unqiueItems array of objects.
    // OK. I want to store itemCount as object where each key is another
    // obj key pairing with multiple properties.
    // Ie, itemCount has 2 keys, shirt and pants, both with title
    // price and id properties.

  const uniqueItemCount = uniqueItems(cartItems);
  console.log(uniqueItemCount)

  return (
    <>
      <div className="checkout">
        <h2>Shopping Cart: </h2>
        <div className="checkoutContent">
          <div className="itemsInCart">
            {Object.entries(uniqueItemCount).map(([itemName, itemProperties]) => (
              <div className="cartItem" key={crypto.randomUUID()}>
                <Link to={`/ProductPage/${extractValidId(itemProperties[0].id)}`}>
                  <img
                    src={itemProperties[0].image}
                    alt={itemProperties[0].title}
                  />
                </Link>
                <div className="cartItemInfo">
                  <h2>{itemProperties[0].title}</h2>
                  <p>
                    Price: ${itemProperties[0].price * itemProperties.length}{" "}
                    {itemProperties[0].currencyCode} 
                  </p>
                  {/* Need num increment. Same as product page.
                  - and + cut and add to array respectively. */}
                  <button
                    className="removeProduct"
                    onClick={() => removeFromCart(itemName)}
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
