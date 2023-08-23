import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import "../products.css";
import Chocolateshellssideimg from "../../../pics/monika-grabkowska-3AnjIdy2804-unsplash.jpg";

export const Chocolateshells = () => {
    const firstThreeProducts = PRODUCTS.slice(6, 9);

    return (
        <div className="shop">
            <div className="sideimg">
                <img src={Chocolateshellssideimg} width="100%"></img>
            </div>
            <div className="mainproduct">
                <div className="shopTitle">
                    <h1 className="producth1">TOP QUALITY CHOCOLATE INGREDIENTS</h1>
                    <h2 className="producth2">Indulge your taste buds and unleash your creativity with a tantalizing assortment of chocolate ingredients from Bakerykart.com. Our collection features a wide range of options, including rich dark chocolate chips, creamy white chocolate chips, crunchy Rice Crispies, and delicate chocolate wafer shells. <br></br>Whether you"re a professional baker or a passionate home cook, these premium chocolate ingredients are the perfect addition to elevate your desserts. Experience the intense flavors of our dark chocolate chips or add a touch of sweetness with our velvety white chocolate chips. Enhance the texture and taste of your recipes with the satisfying crunch of Rice Crispies or create stunning desserts using our elegant chocolate wafer shells.<br></br>With Bakerykart.com, you have access to top-quality chocolate ingredients that will take your creations to the next level. Discover the endless possibilities and let your imagination soar as you delight your family, friends, or customers with mouthwatering treats that showcase the irresistible allure of chocolate. Get started today and unlock a world of culinary delights with our exceptional chocolate ingredients.</h2>
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
