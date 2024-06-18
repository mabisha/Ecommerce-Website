import React, { createContext, useState } from "react";
import data from "../assets/data.json";
export const Shopcontext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  console.log(cartItem);
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { data, cartItem, addToCart, removeFromCart };
  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
export default ShopContextProvider;
