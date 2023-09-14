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
                                {/* checkout(); */ } // to remove all the items function
                                navigate("/login");
                            }}
                        >
                            {" "}
                            Checkout{" "}
                        </button>
                    </div>
                ) : (
                    <div className="empcart">
                        <div className="emp1">
                            <img src={Emptycartimg}></img>
                        </div>
                        <div className="emp2">
                            <center><h1> Your Cart is Empty</h1></center>
                            <center><h6>Looks Like You haven't made Your Choice Yet</h6></center>
                            <center><a href="/"><button>Start Shopping</button></a></center>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};