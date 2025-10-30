import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import photoOne from "../../accets/heroPhoto/hero1.jpg";
import photoTwo from "../../accets/heroPhoto/hero2.jpg";
import photoThree from "../../accets/heroPhoto/hero3.jpg";

const images = [photoOne, photoTwo, photoThree];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationStage, setAnimationStage] = useState("enter");

  useEffect(() => {
    const sequence = [
      { stage: "enter", delay: 1000 }, // start small, move to center
      { stage: "expand", delay: 1000 }, // fullscreen
      { stage: "hold", delay: 1000 }, // hold fullscreen
      { stage: "shrink", delay: 1000 }, // shrink to center
      { stage: "exit", delay: 1000 }, // move upward
    ];

    let stage = 0;

    const animate = () => {
      setAnimationStage(sequence[stage].stage);
      if (stage < sequence.length - 1) {
        setTimeout(animate, sequence[stage].delay);
        stage++;
      } else {
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
          setAnimationStage("enter");
        }, sequence[stage].delay);
      }
    };

    animate();
  }, [currentImageIndex]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className={`carousel-image ${animationStage}`}
      />
    </div>
  );
};

export default HeroSection;
