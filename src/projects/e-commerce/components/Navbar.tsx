import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>
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
