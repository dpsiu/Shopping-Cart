import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";

import MyComponent from "./MyComponent";
import Store from "../pages/Store";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import ProductList from "../components/ProductList";

function App() {
  return (
    <>
      <ul className="navBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
