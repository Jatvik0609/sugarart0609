import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import "../products.css";
import Cocoasideimg from "../../../pics/tetiana-bykovets-8UuAOqcquZU-unsplash.jpg";

export const Cocoa = () => {
    const firstThreeProducts = PRODUCTS.slice(0, 3);

    return (
        <div className="shop">
            <div className="sideimg">
                <img src={Cocoasideimg} width="100%"></img>
            </div>
            <div className="mainproduct">
                <div className="shopTitle">
                    <h1 className="producth1">YOUR PREMIER DESTINATION FOR ALL YOUR COCOA-RELATED NEEDS</h1>
                    <h2 className="producth2">Discover the world of cocoa at Bakerykart.com, your premier destination for all your cocoa-related needs. Our dedicated cocoa category offers a wide range of exquisite products, including premium cocoa powder, luscious cocoa butter, tantalizing cocoa nibs, and more. Whether you"re a baking enthusiast, a chocolatier, or a professional confectioner, our carefully curated selection ensures you have access to top-quality cocoa ingredients for your culinary creations. With our user-friendly e-commerce platform, you can easily explore our cocoa collection, read detailed product descriptions, and make hassle-free purchases. From the rich flavors to the heavenly aromas, indulge your senses and elevate your recipes with our exceptional cocoa offerings. At Bakerykart.com, we"re passionate about providing you with the finest cocoa products, allowing you to unleash your creativity and achieve culinary excellence. Start your cocoa journey with us today and experience the delights of this delectable ingredient. </h2>
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
