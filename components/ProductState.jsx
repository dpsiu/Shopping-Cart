import { useState, useEffect } from "react";

export const useProductState = () => {
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

  return { products, setProducts };
};
