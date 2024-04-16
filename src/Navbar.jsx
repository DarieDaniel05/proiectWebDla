import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./App.css";
import NavButton from "../src/components/navButton";
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="stocks">
        <Link to="/">
          <NavButton name="Homepage"></NavButton>
        </Link>
      </div>
      <div className="favourites">
        <Link to="/counter">
          <NavButton name="Counter"></NavButton>
        </Link>
      </div>
      <div className="cart">
        <Link to="/calculator">
          <NavButton name="Calculator"></NavButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
