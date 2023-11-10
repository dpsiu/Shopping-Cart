import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { SustainableInit } from "../components/SustainableInit";

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      setSlideIndex((prevSlideIndex) =>
        prevSlideIndex >= 2 ? 0 : prevSlideIndex + 1
      );
    };

    const interval = setInterval(showSlides, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slides = [
    "/images/home-group-cottonbro-studio.jpg",
    "/images/home-solo-godisable-jacob.jpg",
    "/images/home-solo-2-cottonbro-studio.jpg",
  ];

  return (
    <>
      <div className="homeBody">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === slideIndex ? "visible" : ""}`}
            >
              <img src={slide} alt="" />
            </div>
          ))}
        </div>
        <div className="home-text">
          <h1>LeBalien Exclusives</h1>
          <h4>When fashion boosts self-confidence</h4>
          <button className="homeShopBtn">
            <Link to="/store">Shop Now</Link>
          </button>
        </div>
        <SustainableInit />
      </div>
    </>
  );
}

export default Home;
