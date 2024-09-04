import React, { useEffect, useRef, useState } from "react";
import { Button } from "common/Components";
import { CarouselProps } from "../types";

const Carousel = ({ slides, intervalTime = 1000 }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout>();
  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  const goToSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const startAutoPlay = () => {
    stopAutoPlay();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, intervalTime);
  };
  const stopAutoPlay = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);
  return (
    <div
      className="carousel-main"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="font-bold text-center text-lg">CAROUSEL</div>
      <div className="carousel-slides">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide})`,
              color: "#fff",
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <span className="text">Image {i + 1}</span>
          </div>
        ))}
      </div>
      <Button
        className="carousel-control prev"
        title="&#10094;"
        onClick={handlePrev}
      />
      <Button
        className="carousel-control next"
        title="&#10095;"
        onClick={handleNext}
      />
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`carousel-indicator ${
              i === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
