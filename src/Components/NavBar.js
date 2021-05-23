import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import image from "../Images/image.png";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <NavLink to={"/"}>
        <img className="logo" src={image} alt="youtube logo" />
      </NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </nav>
  );
};

export default NavBar;
