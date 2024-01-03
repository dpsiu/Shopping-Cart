import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductState } from "./ProductState";

export function extractValidId(id) {
  const parts = id.split("/");
  return parts[parts.length - 1];
}

export default function ProductList() {
  const { products } = useProductState();
  const [selectedProduct, setSelectedProduct] = useState({
    id: "",
    title: "",
    description: "",
    featuredImage: "",
    price: "",
  });

  const handleProductClick = (
    newId,
    newTitle,
    newDescription,
    newFeaturedImage,
    newPrice
  ) => {
    const updatedSelectedProduct = {
      id: newId,
      title: newTitle,
      description: newDescription,
      featuredImage: newFeaturedImage,
      price: newPrice,
    };
    setSelectedProduct(updatedSelectedProduct);
  };

  return (
    <>
      <p className="free-shipping">
        Your $99+ order or in-store pick up SHIPS FREE
      </p>
      <div className="all-products">
        <h3 className="products">Products</h3>
        <p className="products-quantity">Results: {products.length} items</p>
        <div className="productList">
          {products &&
            products.map((product) => (
              <div className="productItem" key={product.node.id}>
                <div className="product-container">
                  <Link
                    to={`/ProductPage/${extractValidId(product.node.id)}`}
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
                          product.node.variants.edges[0].node.price.amount,
                          product.node.quantity
                        )
                      }
                    />
                    <p className="product-title">{product.node.title}</p>
                  </Link>
                  <p className="product-price">
                    ${product.node.variants.edges[0].node.price.amount}{" "}
                    {product.node.variants.edges[0].node.price.currencyCode}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
