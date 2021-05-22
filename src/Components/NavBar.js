import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  return (
    <nav className="NavBarContainer">
      <NavLink to={"/"}>
        <img
          src="https://lh3.googleusercontent.com/M1aDvpQLc4SdHf05mKC-0EvpkRaKGc9E2Tqn_g434YiIY_H3Q_8H3aFWZi_GnifdQn_1cQ=s50"
          alt="youtube logo"
        ></img> Youtube
      </NavLink>
      <NavLink to={"/About"}>About</NavLink>
    </nav>
  );
};

export default NavBar;
