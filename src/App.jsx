import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";

import MyComponent from "./MyComponent";
import Store from "../pages/Store";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className="content">{children}</div>
    <div className="footer">
      <p>2023</p>
      <a href="https://www.linkedin.com/in/denver-siu/">
        <h4>Denver Siu</h4>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
      </a>
      <a href="https://github.com/dpsiu">
        <h4>dpsiu</h4>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
      </a>
    </div>
  </>
);

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product, quantity) => {
    console.log(product);
    console.log(quantity);

    for (let i = quantity; i >= 1; i--) {
      setCartItems((cartItems) => {
        return [...cartItems, product];
      });
    }
    // localStorage.setItem("cartItems", JSON.stringify(cartItems))
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.node.title !== product));

    // localStorage.setItem("cartItems", JSON.stringify(cartItems))
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = (itemQuantity) => {
    console.log(itemQuantity)
    // itemQuantity.pop()
    setQuantity(quantity - 1);
  };


  // const decrementQuantity = (productId) => {
  //   const updatedCartItems = [...cartItems];
  //   const productIndex = updatedCartItems.findIndex(
  //     (item) => item.id === productId
  //   );
  
  //   if (productIndex !== -1) {
  //     if (updatedCartItems[productIndex].quantity > 1) {
  //       updatedCartItems[productIndex].quantity -= 1;
  //     } else {
  //       updatedCartItems.splice(productIndex, 1);
  //     }
  //   }
  // };
  

// I'm successfully removing from shirts array. However, checkout page
// doesn't rerender. React rerenders upon state change. So state not changing.
// BC checkout page reads cartItems array. I am changing shirts array.
// So need to remove one instance of specified item from cartItems array.
// In cartItems array, map through each item, 

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        quantity,
        setQuantity,
        addToCart,
        removeFromCart,
        decrementQuantity,
        incrementQuantity,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/store"
          element={
            <Layout>
              <Store />
            </Layout>
          }
        />
        <Route
          path="/ProductPage/:id"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />
      </Routes>
    </ShopContext.Provider>
  );
};

export default App;
