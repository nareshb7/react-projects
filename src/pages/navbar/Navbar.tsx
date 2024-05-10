import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import logo from 'assets/nrLogo.png'
import { projectsList } from "utils/projectsConfig";

const Navbar = () => {
  return (
    <nav className="nav-bar bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="flex-shrink-0 logo">
              <NavLink to='/' className="text-white font-bold text-lg ">
                <img src={logo} />
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            {projectsList.map((project) => {
              return (
                <li
                  key={project.id}
                  style={{ display: "inline-block", margin: "5px" }}
                >
                  <NavLink
                    to={project.path}
                    className={`nav-item text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      project.status === "Completed"
                        ? "green"
                        : project.status === "In Progress"
                        ? "yellow"
                        : "red"
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
