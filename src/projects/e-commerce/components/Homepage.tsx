import React from "react";
import Slider from "projects/carousel/components/Slider";
import { homePageData } from "../data/mockData";
import { LaptopDataType, MobileDataType } from "../types";
import { renderLaptopCard, renderMobileCard } from "../helper";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const onMobileCardClick = (id: number, title: string,tag: string) => {
    console.log("CLICKED:::", id, title);
    navigate(`${tag}&${title}&${id}`)
  };
  return (
    <div>
      <div className="font-semibold text-lg">Mobiles </div>
      <Slider<MobileDataType>
        slides={homePageData.mobiles}
        renderCard={(s, i) => renderMobileCard(s, i, onMobileCardClick)}
      />
      <div className="font-semibold text-lg">Laptops </div>
      <Slider<LaptopDataType>
        slides={homePageData.laptops}
        renderCard={(s, i) => renderLaptopCard(s, i, onMobileCardClick)}
      />
    </div>
  );
};

export default Homepage;
