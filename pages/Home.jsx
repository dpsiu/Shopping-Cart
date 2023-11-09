import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// function showSlides() {
//   let slides = document.getElementsByClassName("slide");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 5000);
// }

// showSlides();

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
    "images/Homebanner Group cottonbro-studio.jpg",
    "images/Homebanner Solo - godisable-jacob.jpg",
    "images/Homebanner solo 2 cottonbro-studio.jpg",
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
      </div>
    </>
  );
}

export default Home;
