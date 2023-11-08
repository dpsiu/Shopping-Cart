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
            {/* <p className="LeBalein">LeBalein</p> */}
            <img
              className="lebalein-icon"
              src="Icons/BlueWhaleIcon.png"
              alt="Blue Whale Site Icon"
            />
          </Link>
          <Link to="/store">
            <li>Store</li>
            {/* <img
              className="nav-icon"
              src="Icons/Header search icon.png"
              alt="Search Icon"
            /> */}
          </Link>
          <Link to="/checkout" className="lastLink">
            <li>Checkout {cartItemsNum}</li>
            {/* <img
              className="nav-icon"
              src="Icons/Header bag icon.png"
              alt="Bag / Checkout Icon"
            /> */}
          </Link>
        </ul>
      </nav>
    </>
  );
}
