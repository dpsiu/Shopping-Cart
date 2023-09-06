import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductState } from "./ProductState";

export default function ProductList() {
  const { products } = useProductState();

  function extractValidId(id) {
    const parts = id.split("/");
    return parts[parts.length - 1];
  }

  const [selectedProduct, setSelectedProduct] = useState({
    id: "",
    title: "",
    description: "",
    featuredImage: "",
    price: "",
    quantity: 1,
  });

  const handleProductClick = (
    newId,
    newTitle,
    newDescription,
    newFeaturedImage,
    newPrice,
    // newQuantity
  ) => {
    const updatedSelectedProduct = {
      id: newId,
      title: newTitle,
      description: newDescription,
      featuredImage: newFeaturedImage,
      price: newPrice,
      // quantity: newQuantity
    };
    setSelectedProduct(updatedSelectedProduct);
  };

  return (
    <>
      <div className="productList">
        <h3>Products</h3>
        <ul>
          {products &&
            products.map((product) => (
              <div className="productItem" key={product.node.id}>
                <li>
                  <h4>{product.node.title}</h4>
                  <Link
                    to={`/ProductPage/${extractValidId(product.node.id)}`}
                    state={{ selectedProduct: selectedProduct }}
                  >
                    <img
                      src={product.node.featuredImage.url}
                      alt={product.node.title}
                      onClick={() =>
                        handleProductClick(
                          product.node.id,
                          product.node.title,
                          product.node.description,
                          product.node.featuredImage,
                          product.node.variants.edges[0].node.price.amount * 5,
                          product.node.quantity
                        )
                      }
                    />
                  </Link>
                  <p>
                    Price: $
                    {product.node.variants.edges[0].node.price.amount * 5}{" "}
                    {product.node.variants.edges[0].node.price.currencyCode}
                  </p>
                </li>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
}
