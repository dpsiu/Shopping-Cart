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
        <img
          src={product.node.featuredImage.url}
          alt={product.node.title}
        />
        <div className="productInfo">
          <h4>{product.node.title}</h4>
          <p>{product.node.description}</p>
          <p>
            Price: ${product.node.variants.edges[0].node.price.amount * 5}{" "}
            {product.node.variants.edges[0].node.price.currencyCode}
          </p>
          <button>Add to Cart</button>
{/* I want to create an add to cart button. Might need cart component,
similar to having created productstate component. Utilize the ...product?
Think about how WebDevSimplified used the ... to make a new array, adding
this item into it. If I go to diff product page, the array data must be pushed 
back to cart component? Once that works, think about how to calculate total. 

Steps - 
- Avoid quantity rn. Add button made. Need some indicator of add. 
    Checkout li (0) number? / "Added to cart"
- Design checkout page. Follow amazon. Left half = "Shopping cart" 
        + array of items. 
    Right half = Box with border style. "Subtotal (X items): $$$" 
        "Proceed to checkout" button
- Map through cart array. With each, render out Title + Price + "Delete" button*/}

        </div>
      </div>
    </>
  );
}
