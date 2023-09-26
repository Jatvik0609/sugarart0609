import React, { useState, useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { User } from "phosphor-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./navbar.css";
import Logo from "./Artboard1.png";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const totalQuantity = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

  const [userData, setUserData] = useState();

  const navigate = useNavigate();
  const callNavPage = async () => {
    try {
      const res = await axios.post('/', {
        token: localStorage.getItem('token')
      });

      setUserData(res.data);
    }
    catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    callNavPage();
  }, [])

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <img src={Logo} className="sugarartlogo"></img>
        </Link>
        <div className="middddle">
          <ul>
            <Link to="/">
              <li><a>HOME</a></li>
            </Link>
            <li><a href="/#categories">CATEGORIES</a></li>
            <Link to="/products"><li>PRODUCTS</li></Link>
            <li><a href="/#aboutus">ABOUT US</a></li>
          </ul>
        </div>

        <div className="cart-num">
          <Link to="/cart" className="carticon">
            <ShoppingCart size={20} />
          </Link>
          <p>Cart({totalQuantity})</p>

          <Link to="/login" className="user-icon">
            <User size={20} />
          </Link>
          <p>{userData?.name || ''}</p>
        </div>
      </div>
    </div >
  );
};
