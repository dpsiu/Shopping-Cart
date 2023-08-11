import { useState } from "react";
import "./App.css";

import MyComponent from "./MyComponent";
import Store from "../pages/Store";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";

import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
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
