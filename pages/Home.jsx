import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homeShopBtn">
        <h2>Home</h2>
        <li>
          <Link to="/store">Shop Now</Link>
        </li>
      </div>
    </>
  );
}

export default Home;
