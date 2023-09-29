import React, { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useProductState } from "./ProductState";
import { ShopContext } from "../src/App";

export default function ProductPage() {
  const { products } = useProductState();
  const { id } = useParams();
  const product = products.find((product) => product.node.id.includes(id));
  const { addToCart, quantity, incrementQuantity, decrementQuantity } =
    useContext(ShopContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="productPage">
        <img src={product.node.featuredImage.url} alt={product.node.title} />
        <div className="productInfo">
          <h4>{product.node.title}</h4>
          <p>{product.node.description}</p>
          <p>
            Price: $
            {product.node.variants.edges[0].node.price.amount * 5 * quantity}{" "}
            {product.node.variants.edges[0].node.price.currencyCode}
          </p>
          <div className="counter">
            <button
              onClick={() => decrementQuantity()}
              disabled={quantity === 1}
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => incrementQuantity()}
              disabled={quantity === 10}
            >
              +
            </button>
          </div>
          <button className="addtocartbtn" onClick={() => addToCart(product, quantity)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
