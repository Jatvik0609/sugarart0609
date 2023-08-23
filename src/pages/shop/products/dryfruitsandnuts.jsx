import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import "../products.css";
import Dryfruitsandnutssideimg from "../../../pics/margarita-zueva-aDxzwSmY90A-unsplash.jpg";

export const Dryfruitsandnuts = () => {
    const firstThreeProducts = PRODUCTS.slice(15, 18);

    return (
        <div className="shop">
            <div className="sideimg">
                <img src={Dryfruitsandnutssideimg} width="100%"></img>
            </div>
            <div className="mainproduct">
                <div className="shopTitle">
                    <h1 className="producth1">Premium Dry Fruits & Nuts Online</h1>
                    <h2 className="producth2">Discover a wide selection of premium dry fruits and nuts at our store. Indulge in the rich flavors and irresistible textures of hazelnuts, almond flakes, blueberries, caramel, dates, and butterscotch nuts. Whether you"re looking for a healthy snack or seeking to elevate your culinary creations, our high-quality assortment is sure to satisfy your cravings.<br></br>We take great pride in sourcing the finest dry fruits and nuts, ensuring their freshness and superior taste. With their natural goodness and nutritional benefits, these ingredients are perfect for adding a delightful touch to your recipes or enjoying on their own. From enhancing your morning cereal to creating decadent desserts, our dry fruits and nuts offer versatility and a burst of flavors. Treat yourself to the pleasure of wholesome indulgence by exploring our premium collection today. Shop now and embark on a flavorful journey with our exquisite dry fruits and nuts.</h2>
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
