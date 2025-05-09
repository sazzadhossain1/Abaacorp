import React, { useRef, useEffect, useState } from "react";
import "./FirstSection.css";
import firstSection1 from "../../accets/firstSectionPhoto/carouselPhoto/firstSectionPhoto1.webp";
import firstSection2 from "../../accets/firstSectionPhoto/carouselPhoto/firstSectionPhoto2.webp";
import firstSection3 from "../../accets/firstSectionPhoto/carouselPhoto/firstSectionPhoto3.webp";
import firstSection4 from "../../accets/firstSectionPhoto/carouselPhoto/firstSectionPhoto4.webp";
import firstSection5 from "../../accets/firstSectionPhoto/carouselPhoto/firstSectionPhoto5.webp";
import firstSection6 from "../../accets/firstSectionPhoto/carouselPhoto/firstSectionPhoto6.webp";
import firstSection7 from "../../accets/firstSectionPhoto/carouselPhoto/firstSectionPhoto7.webp";
import firstSection8 from "../../accets/firstSectionPhoto/carouselPhoto/firstSectionPhoto8.webp";

const images = [
  firstSection1,
  firstSection2,
  firstSection3,
  firstSection4,
  firstSection5,
  firstSection6,
  firstSection7,
  firstSection8,
];

const FirstSection = () => {
  const carouselRef = useRef(null);
  const imageRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Scroll to a specific image inside the carousel only
  const scrollToIndex = (index) => {
    const image = imageRefs.current[index];
    const container = carouselRef.current;

    if (image && container) {
      const scrollLeft =
        image.offsetLeft - container.offsetWidth / 2 + image.offsetWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });

      setCurrentIndex(index);
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <h1>Lorem ipsum dolor, sit amet consectetur</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <a href="/">Lorem ipsum dolor sit amet consectetur.</a>
      </div>

      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`carousel-${i}`}
              className="carousel-img"
              ref={(el) => (imageRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
