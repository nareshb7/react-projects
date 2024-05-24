import React from "react";
import './styles.scss'
import RegularDropDown from "./components/RegularDropDown";
import CustomDropDown from "./components/CustomDropDown";
import { options } from "./mockData";

const DropDownMain = () => {
  return (
    <div className="dropdown-main">
      <div className="font-bold text-center">DROPDOWN MAIN</div>
      <div className="flex gap-10 justify-center my-2">
      <RegularDropDown />
      <CustomDropDown
        options={options}
        onSelect={(val) => console.log("SELECTED_OPTION::", val)}
        isSearchable={true}
      />
      </div>
    </div>
  );
};

export default DropDownMain;
