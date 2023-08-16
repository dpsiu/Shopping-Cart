import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useProductState } from "./ProductState"


export default function ProductPage() {
  const {products} = useProductState()
  const { id } = useParams(); 
  const product = products.find((product) => product.node.id.includes(id)); // Find the product with id containing the specified string

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="productPage">
        <h1>{id}</h1>
        <h1>{product.node.description}</h1>
      </div>
    </>
  );
}
