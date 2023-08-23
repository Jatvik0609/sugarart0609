import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import "../products.css";
import Fillingsideimg from "../../../pics/kaouther-djouada-hcEDfkiVmMI-unsplash.jpg";

export const Filling = () => {
    const firstThreeProducts = PRODUCTS.slice(3, 6);

    return (
        <div className="shop">
            <div className="sideimg">
                <img src={Fillingsideimg} width="100%"></img>
            </div>
            <div className="mainproduct">
                <div className="shopTitle">
                    <h1 className="producth1">CHOCOLATE FILLING FOR PRALINE</h1>
                    <h2 className="producth2">Enhance your chocolate creations with exquisite chocolate fillings that will delight your customers and elevate the flavors and textures of your chocolates and desserts. At Bakerykart.com, we offer a selection of superior quality chocolate fillings from renowned brands such as Cacao Barry and Callebaut. These fillings are crafted with the finest ingredients to ensure consistent and exceptional results. With a long shelf life, they provide convenience and versatility in your chocolate-making process.
                        <br></br>Choose from a variety of flavors, textures, and colors to suit your preferences and creative vision. Whether you use them as they are or incorporate them into your own flavoring and texturizing techniques, these chocolate fillings open up a world of possibilities for your culinary creations. Experience the richness and indulgence of these premium chocolate fillings, and create memorable chocolate delights that will leave a lasting impression on your customers. </h2>
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
