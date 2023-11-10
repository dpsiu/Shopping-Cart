import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";

import MyComponent from "./MyComponent";
import Store from "../pages/Store";
import Checkout from "../pages/Checkout";
import { Sustainability } from "../pages/Sustainability";
import Home from "../pages/Home";
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";

const Layout = ({ children }) => (
  <>
    <div className="application">
      <NavBar />
        <div className="content">{children}</div>
      <Footer />
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
    for (let i = quantity; i >= 1; i--) {
      setCartItems((cartItems) => {
        return [...cartItems, product];
      });
    }
    setQuantity(1);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.node.title !== product));
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = (itemQuantity) => {
    setQuantity(quantity - 1);
  };

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
        <Route
          path="/sustainability-pledge"
          element={
            <Layout>
              <Sustainability />
            </Layout>
          }
        />
      </Routes>
    </ShopContext.Provider>
  );
};

export default App;
