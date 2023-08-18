import { useContext } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";

import {ShopContext} from "../src/App"

export default function NavBar() {
    const { cartItems } = useContext(ShopContext)

  return (
    <>
      <ul className="navBar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/store">
          <li>Store</li>
        </Link>
        <Link to="/checkout" className="lastLink">
          <li>Checkout ({cartItems.length})</li>
        </Link>
      </ul>
    </>
  );
}
