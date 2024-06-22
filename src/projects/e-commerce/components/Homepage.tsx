import Slider from "projects/carousel/components/Slider";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { renderLaptopCard, renderMobileCard } from "../helper";
import { homePageDataSelector } from "../store/CartReducer";
import { MobileDataType } from "../types";

const Homepage = () => {
  const navigate = useNavigate();
  const homePageData = useSelector(homePageDataSelector)
  const onMobileCardClick = (id: number, title: string, tag: string) => {
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
          <div
            key={laptop.id}
            className="w-[30%] mx-auto"
            style={{ flex: "0 1 30%" }}
          >
            {renderLaptopCard(laptop, i, onMobileCardClick)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
