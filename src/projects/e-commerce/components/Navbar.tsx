import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/cart-logo.png";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="flex-shrink-0 logo">
        <NavLink to="/" className="text-white font-bold text-lg ">
          <img src={logo} alt="logo" />
        </NavLink>
        <span>Shopping Kart</span>
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
      </ul>
    </div>
  );
};

export default Navbar;
