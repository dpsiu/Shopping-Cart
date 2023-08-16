import { useState } from "react";
import "./App.css";
import { Link, Routes, Route, Outlet } from "react-router-dom";

import MyComponent from "./MyComponent";
import Store from "../pages/Store";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage"

const Layout = ({ children }) => (
  <>
    <div className="navBar">
      <ul className="navBarLeft">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/store">
          <li>Store</li>
        </Link>
      </ul>
      <ul className="navBarRight">
        <Link to="/checkout">
          <li>Checkout</li>
        </Link>
      </ul>
    </div>
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

const App = () => (
  <Routes>
    <Route path="/" element={<Layout><Home /></Layout>} />
    <Route path="/store" element={<Layout><Store /></Layout>} />
    <Route path="/ProductPage/:id" element={<Layout><ProductPage /></Layout>} />
    <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
  </Routes>
);

export default App;
