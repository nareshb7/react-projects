import React from "react";
import "./styles.scss";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";
import { slides } from "./slides";

const CarouselMain = () => {
  const renderCard = (slide: string, i: number) => {
    return (
      <div className="card" style={{ backgroundImage: `url(${slide})` }}>
        Slide {i + 1}
      </div>
    );
  };
  return (
    <div className="carousel-wrapper">
      <Carousel slides={slides} intervalTime={1000} />
      <Slider<string> slides={slides} renderCard={renderCard} />
    </div>
  );
};
export default CarouselMain;
