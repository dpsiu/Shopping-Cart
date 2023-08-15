import { useState, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const request = await fetch(
          "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
        );
        const response = await request.json();

        setProducts(response.data.products.edges);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    }
    fetchProducts();
  }, []);

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
                  {/* <p>{product.node.description}</p> */}
                  <img
                    src={product.node.featuredImage.url}
                    alt={product.node.title}
                  />
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
