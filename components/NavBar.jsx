import { useContext } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { ShopContext } from "../src/App";

export default function NavBar() {
  const { cartItems } = useContext(ShopContext);

  const cartItemsNum = cartItems.length > 0 ? `(${cartItems.length})` : "";

  return (
    <>
      <nav className="navbar">
        <p className="alert">Flash Sale | Extra 25% Off Select Products</p>
        <ul className="navigation">
          <Link to="/" className="logo-container">
            <img
              className="lebalein-icon"
              src="/lebaleinicon.png"
              alt="Blue Whale Site Icon"
            />
          </Link>
          <Link to="/store">
            <li>Store</li>
          </Link>
          <Link to="/checkout" className="lastLink">
            <li>Checkout {cartItemsNum}</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
