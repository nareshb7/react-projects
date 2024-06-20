import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/cart-logo.png";
import { Button } from "common/Components";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="flex-shrink-0 flex items-center gap-1">
        <NavLink to="/e-commerce" className=" logo inline-block">
          <img src={logo} alt="logo" />
          <span className="font-semibold">Shopping_Kart</span>
        </NavLink>
      </div>
      <div>
        <input className="p-2 m-2 rounded" placeholder="Search here..." />
        <Button title="Search" />
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
