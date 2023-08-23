import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import "../products.css";
import Foodcoloringsideimg from "../../../pics/miranda-fritz-NTvEVO77ris-unsplash.jpg";

export const Foodcoloring = () => {
    const firstThreeProducts = PRODUCTS.slice(12, 15);

    return (
        <div className="shop">
            <div className="sideimg">
                <img src={Foodcoloringsideimg} width="100%"></img>
            </div>
            <div className="mainproduct">
                <div className="shopTitle">
                    <h1 className="producth1">Food Colour Online at Best Price in India</h1>
                    <h2 className="producth2">A food colouring is a pigment that adds colour to chocolate and baked goods after they are added to your creations. These Food Colors are available in a variety of forms, including icing gel colours, oil colours, lustre dust colours, powder colours, liquid colours, and more, and are used by chefs and bakers throughout India.<br></br>As a baker you should understand the application of food colour before choosing to buy them. As these colors have a specific application like icing gel colors are ideal for fondant, cake batter, gum paste or whipping cream, whereas cocoa butter colors or oil candy colors are ideal to colourful moulded chocolate or candies. Similarly lustre dust are idea for dry dusting fondant, gum paste or chocolate, using these ready to use food colors you can add a vibrant touch to your creation. Choose the desired food colors to suite your application. We have sourced premium quality food coloring for popular brands such as Magic Colours, Bakersville, PCB Creation, Lesepidado. Order your supply of food colour online at best price, we deliver them to your door step within 5 to 7 business days.</h2>
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
