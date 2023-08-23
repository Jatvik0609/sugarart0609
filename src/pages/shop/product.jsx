import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} className="productimg" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addtocart" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
    </div>
  );
};
