import React, { useState } from "react";
import { options } from "../mockData";

const RegularDropDown = () => {
  const [selectedval, setSelectedVal] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedVal(value);
  };
  return (
    <div className="border border-slate-400 w-3/12 rounded-md">
      <div className="font-bold my-1">RegularDropDown </div>
      <div>
        <select
          className="px-4 py-2 border border-gray-500"
          name="regularDropDown"
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <div className="font-bold">Selected: {selectedval}</div>
    </div>
  );
};

export default RegularDropDown;
