import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
type Props = {};

const Navigation = (props: Props) => {
  return (
    <nav className="navigation">
      <NavLink to="/home"> Home </NavLink>
      <NavLink to="/tunes"> Tunes </NavLink>
      <NavLink to="/about"> About </NavLink>
    </nav>
  );
};

export default Navigation;
