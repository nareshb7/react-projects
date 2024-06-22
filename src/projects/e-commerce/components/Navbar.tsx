import React, { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "assets/cart-logo.png";
import { Button } from "common/Components";
import { debounce } from "utils/util";
import { getAutoSuggestions } from "../service/api";
import { CartType, Tags } from "../store/CartReducer";

const Navbar = () => {
  const navigate = useNavigate();
  const [suggestionList, setSuggestionList] = useState<CartType[]>([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAutoSuggestion = useCallback(
    debounce((val: string) => {
      console.log("VSL:::::", val);
      setIsLoading(true);
      getAutoSuggestions(val)
        .then((data) => {
          console.log("SUGGES:::", data);
          setSuggestionList(data as CartType[]);
        })
        .catch((err) => {
          console.error("search_suggestion_err::", err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 500),
    []
  );

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchVal(value);
    getAutoSuggestion(value);
  };
  const clearData = () => {
    setSuggestionList([]);
    setSearchVal("");
  };
  const handleNameClick = ({ tag, title, id }: CartType) => {
    clearData();
    navigate(`/e-commerce/${tag}&${title}&${id}`);
  };
  const handleTagClick = (tag: Tags) => {
    clearData();
    navigate(`/e-commerce/list/${tag}`);
  };
  return (
    <div className="nav-bar bg-blue-500 shadow-xl">
      <div className="flex-shrink-0 flex items-center gap-1">
        <NavLink to="/e-commerce" className=" logo inline-block">
          <img src={logo} alt="logo" />
          <span className="font-semibold">Shopping_Kart</span>
        </NavLink>
      </div>
      <div>
        <div className="relative">
          <input
            list="suggestions"
            className="p-2 m-2 rounded"
            placeholder="Search here..."
            value={searchVal}
            onChange={onSearchInput}
          />
          <ul className="absolute top-[100%] left-0 bg-white w-[80%] rounded max-h-[200px] overflow-auto z-10">
            {isLoading && (
              <li className="font-bold text-green-400">loading....</li>
            )}
            {suggestionList.length > 0 &&
              suggestionList.map((product) => (
                <li
                  key={product.id + product.title}
                  className="my-1 bg-slate-200 p-2  "
                >
                  <span
                    onClick={() => handleNameClick(product)}
                    className="font-bold cursor-pointer"
                  >
                    {product.title}
                  </span>
                  <p className="text-sm">
                    {" "}
                    in{" "}
                    <span
                      onClick={() => handleTagClick(product.tag)}
                      className="text-gray-600 cursor-pointer"
                    >
                      {product.tag}
                    </span>
                  </p>
                </li>
              ))}
            {!isLoading &&
              searchVal.length > 3 &&
              suggestionList.length == 0 && (
                <div className="text-orange-400">No Result found</div>
              )}
          </ul>
        </div>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="list/mobiles">Mobiles</NavLink>
        </li>
        <li>
          <NavLink to="list/laptops">Laptops</NavLink>
        </li>
        <li>
          <NavLink to="list/electronics">Electronics</NavLink>
        </li>
        <li>
          <NavLink to="cart">Cart</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
