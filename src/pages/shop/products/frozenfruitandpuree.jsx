import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import "../products.css";
import Frozenfruitandpureesideimg from "../../../pics/jo-sonn-zeFy-oCUhV8-unsplash.jpg";

export const Frozenfruitandpuree = () => {
    const firstThreeProducts = PRODUCTS.slice(18, 21);

    return (
        <div className="shop">
            <div className="sideimg">
                <img src={Frozenfruitandpureesideimg} width="100%"></img>
            </div>
            <div className="mainproduct">
                <div className="shopTitle">
                    <h1 className="producth1">Frozen Fruit & Puree</h1>
                    <h2 className="producth2">Discover the enticing world of Frozen Fruit & Puree, where an array of exceptional fruit purees awaits to elevate your culinary creations. Indulge in the exquisite flavors of Raspberry, Mango Alphonso, Passion Fruit, Pineapple, Lychee, and Strawberry purees, carefully crafted from the finest fruits.<br></br>Immerse yourself in the natural goodness and vibrant colors of our frozen fruit and puree selection. Each puree is made from meticulously selected fruits at their peak ripeness, capturing their essence and preserving their nutrients. With our purees, you can unleash your creativity and add an explosion of flavor to desserts, beverages, sauces, and more.<br></br>Whether you"re a professional chef, a home cook, or a passionate food enthusiast, our Frozen Fruit & Puree collection offers endless possibilities to elevate your dishes. Let the fruity goodness inspire your culinary experiments and unlock new taste sensations.</h2>
                </div>
                <div className="products">
                    {firstThreeProducts.map((product) => (
                        <Product data={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};
