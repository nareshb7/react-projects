import React, { useState } from "react";
import "./slider.scss";
import { Button } from "common/Components";
import { SliderProps } from "../types";

const Slider = <T,>({ slides, renderCard }: SliderProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + slides.length - 2) % (slides.length - 2)
    );
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % (slides.length - 2));
  };
  return (
    <div className="slider-wrapper">
      {/* <div className="font-bold text-center text-lg">Slider</div> */}
      <div className="slides-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 33}%)` }}
        >
          {slides.map((slide, i) => {
            return <div className="slide" key={i}> {renderCard(slide, i)}</div>;
          })}
        </div>
        {currentIndex > 0 && (
          <Button
            className="slider-control prev"
            title="&#10094;"
            onClick={handlePrev}
          />
        )}
        {currentIndex < slides.length-3 && (
          <Button
            className="slider-control next"
            title="&#10095;"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default Slider;
