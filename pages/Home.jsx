import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homeBody">
        <button className="homeShopBtn">
          <Link to="/store">Shop Now</Link>
        </button>
      </div>
    </>
  );
}

export default Home;
