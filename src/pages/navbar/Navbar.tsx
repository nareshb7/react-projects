import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { PROJECTS } from "utils/Constants";

const Navbar = () => {
  return (
    <nav className="nav-bar bg-gray-800 py-4 navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-lg">
                Logo
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            {PROJECTS.map((project) => {
              return (
                <li
                  key={project.id}
                  style={{ display: "inline-block", margin: "5px" }}
                >
                  <NavLink
                    to={project.path}
                    className={`nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      project.status ? "green" : "red"
                    }`}
                  >
                    {project.title}
                  </NavLink>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
