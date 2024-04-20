import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { PROJECTS } from "utils/Constants";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul style={{padding: "0px"}}>
        {PROJECTS.map((project) => {
          return (
            <li key={project.id} style={{display: "inline-block", margin: "5px"}}>
              <NavLink to={project.path} className={project.status ? "green" : "red"}>
                {project.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
