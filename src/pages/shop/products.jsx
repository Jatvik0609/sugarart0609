import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./products.css";

export const Products = () => {

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

    return (
        <div className="shopp">
            <div className="shopTitle">
                <h1>Raw material</h1>
            </div>
            <div className="flex">
                <div className="products">
                    {PRODUCTS.map((product) => (
                        <Product data={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
