import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cartitem";
import { useNavigate } from "react-router-dom";
import Emptycartimg from "./carticon.webp";

import "./cart.css";
export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart1">
            <div className="carttitle">
                <h1>Cart</h1>
            </div>
            <div className="cart">
                <div className="cart">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />;
                        }
                    })}
                </div>

                {totalAmount > 0 ? (
                    <div className="checkout">
                        <p> Subtotal: <span> ${totalAmount}</span> </p>
                        <button onClick={() => navigate("/")}> Continue Shopping </button>
                        <button
                            onClick={() => {
                                checkout();
                                navigate("/checkout");
                            }}
                        >
                            {" "}
                            Checkout{" "}
                        </button>
                    </div>
                ) : (
                    <div>
                        <img src={Emptycartimg}></img>
                        <h1> Your Shopping Cart is Empty</h1>
                    </div>
                )}
            </div>
        </div>
    );
};