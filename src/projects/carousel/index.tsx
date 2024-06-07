import React from "react";
import "./styles.scss";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";
import { slides } from "./slides";

const CarouselMain = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel slides={slides} intervalTime={1000} />
      <Slider slides={slides} />
    </div>
  );
};
export default CarouselMain;
