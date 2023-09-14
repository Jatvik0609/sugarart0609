import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { User } from "phosphor-react";
import "./navbar.css";
import Logo from "./Artboard1.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <img src={Logo} className="sugarartlogo"></img>
        </Link>
        <div>
          <ul>
            <Link to="/">
              <li><a>HOME</a></li>
            </Link>
            <li><a href="/#categories">CATEGORIES</a></li>
            <Link to="/products"><li>PRODUCTS</li></Link>
            <li><a href="/#aboutus">ABOUT US</a></li>
          </ul>
        </div>
        <ul>
          <Link to="/cart" className="carticon">
            <ShoppingCart size={20} />
          </Link>
          <Link to="/login">
            {/* <User size={20} /> */}
          </Link>
        </ul>
      </div>
    </div >
  );
};
