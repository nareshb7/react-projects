import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "projects/carousel/components/Slider";
import { homePageData } from "../data/mockData";
import { MobileDataType } from "../types";
import { renderLaptopCard, renderMobileCard } from "../helper";

const Homepage = () => {
  const navigate = useNavigate();
  const onMobileCardClick = (id: number, title: string, tag: string) => {
    console.log("CLICKED:::", id, title);
    navigate(`${tag}&${title}&${id}`);
  };
  return (
    <div>
      <div className="font-semibold text-lg">Mobiles </div>
      <Slider<MobileDataType>
        slides={homePageData.mobiles}
        renderCard={(s, i) => renderMobileCard(s, i, onMobileCardClick)}
      />
      <div className="font-semibold text-lg">Laptops </div>
      <div className="flex flex-wrap gap-1">
        {homePageData.laptops.map((laptop, i) => (
          <div className="w-[30%] mx-auto" style={{ flex: "0 1 30%" }}>
            {renderLaptopCard(laptop, i, onMobileCardClick)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
