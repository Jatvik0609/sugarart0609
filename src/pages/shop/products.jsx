import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./products.css";

export const Products = () => {
    return (
        <div className="shop">
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
