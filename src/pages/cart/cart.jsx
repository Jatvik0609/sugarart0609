import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cartitem";
import { useNavigate } from "react-router-dom";
import Emptycartimg from "./carticon.webp";
import { useEffect } from "react";
import axios from "axios";
import "./cart.css";

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    const callProductPage = async () => {
        try {
            const res = await axios.post('/', {
                token: localStorage.getItem('token')
            });


            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }

        }
        catch (err) {
            console.log(err);
            navigate("/login");
        }
    }

    useEffect(() => {
        callProductPage();
    }, [])

    const isCartEmpty = totalAmount === 0;

    return (
        <div className="cart1">
            <div className="carttitle">
                {/* <h1>Cart</h1> */}
            </div>
            {isCartEmpty ? (
                <div className="empty-cart">
                    <div className="emp1">
                        <img src={Emptycartimg} alt="Empty Cart" />
                    </div>
                    <div className="emp2">
                        <center><h1>Your Cart is Empty</h1></center>
                        <center><h6>Looks like you haven't made your choice yet.</h6></center>
                        <center><a href="/"><button>Start Shopping</button></a></center>
                    </div>
                </div>
            ) : (
                <div className="cart-grid">
                    <div className="cart-items">
                        <div>
                            <h2>My Cart</h2>
                        </div>
                        <div className="itemsdetails">
                            <h4>Items Details</h4>
                        </div>
                        {PRODUCTS.map((product) => {
                            if (cartItems[product.id] !== 0) {
                                return <CartItem key={product.id} data={product} />;
                            }
                        })}
                        <button onClick={() => navigate("/")} className="btn222"><span>&lt;</span>CONTINUE SHOPPING</button>
                    </div>

                    <div className="cart-total">
                        <div className="toooootoal">
                            <p>items Total: </p>
                            <span>₹{totalAmount}</span>
                        </div>
                        <div className="appprox">
                            <p>Approx. Delivery Charge</p><span className="green">Free</span>
                        </div>
                        <div className="lineee">
                            <hr></hr>
                        </div>
                        <div>
                            <div className="totooool">
                                <p>Amount Payable:</p> <span>₹{totalAmount}</span>
                            </div>
                            <h6>Prices may change based on shipping address</h6>
                        </div>
                        {/* <button onClick={() => navigate("/")}>Continue Shopping</button> */}
                        <center><button onClick={() => navigate("/checkout")}>CHECKOUT</button></center>
                    </div>
                </div>
            )}
        </div>
    );
};
