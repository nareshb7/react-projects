import React, { useEffect, useRef, useState } from "react";
import { Input } from "common/Components";
import { CustomDropDownProps, DropDownOption } from "../types";
import { useOutsideClick } from "common/hooks";

const CustomDropDown = ({
  options,
  onSelect,
  isSearchable = false,
}: CustomDropDownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<DropDownOption>({
    title: "",
    value: "",
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] =
    useState<DropDownOption[]>(options);
  const handleToggle = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };
  useOutsideClick(dropdownRef, () => {
    setIsOptionsOpen(false);
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };
  const handleOptionSelect = (option: DropDownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOptionsOpen(false);
  };
  const updateFilterOptions = (searchQuery: string) => {
    const latesOptions = options.filter((option) =>
      option.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredOptions(latesOptions);
  };
  const handleClear = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setSelectedOption({ title: "", value: "" });
    setIsOptionsOpen(false);
  };
  useEffect(() => {
    updateFilterOptions(searchQuery);
  }, [searchQuery]);
  return (
    <div className="border border-slate-400 my-1 custom-dropdown w-4/12 p-1 rounded-md">
      <div className="font-bold">CustomDropDown</div>
      <div className="custom-dropdown-wrapper realtive" ref={dropdownRef}>
        <div
          className="dropdown-header cursor-pointer border border-gray-500 relative h-9"
          onClick={handleToggle}
        >
          {selectedOption.title ? selectedOption.title : "Select an Option"}
          <span
            className="absolute close-icon bg-blue-500 rounded-50 px-2 py-1"
            onClick={handleClear}
          >
            &#x2715;
          </span>
        </div>
        {isOptionsOpen && (
          <div className="dropdown-menu absolute bg-white border border-gray-300 shadow-lg rounded-md w-4/12">
            {isSearchable && (
              <div>
                <Input
                  className="border border-blue-500 px-3 py-1 mx-1"
                  onChange={handleInputChange}
                  value={searchQuery}
                  placeholder="search hereeee"
                />
              </div>
            )}
            <ul className="max-h-200 overflow-auto max-h-60">
              {filteredOptions.map((option) => {
                return (
                  <li
                    key={option.value}
                    onClick={() => handleOptionSelect(option)}
                    className="py-2 hover:bg-gray-200 mx-1"
                  >
                    {option.title}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropDown;
