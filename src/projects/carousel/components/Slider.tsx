import React, { useState } from "react";
import { Button } from "common/Components";
import { SliderProps } from "../types";

const Slider = ({ slides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    console.log("CURRENT:::", currentIndex)
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % (slides.length-2));
  };
  return (
    <div className="slider-wrapper">
      <div className="font-bold text-center text-lg">Slider</div>
      <div className="slides-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 33}%)` }}
        >
          {slides.map((slide, i) => {
            return (
              <div key={slide} className="slide">
                <div
                  className="card"
                  style={{ backgroundImage: `url(${slide})` }}
                >Slide {i+1}</div>
              </div>
            );
          })}
        </div>
        <Button
          className="slider-control prev"
          title="&#10094;"
          onClick={handlePrev}
        />
        <Button
          className="slider-control next"
          title="&#10095;"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Slider;
