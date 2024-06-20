import React, { createContext, useEffect, useState } from "react";
export const Shopcontext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 30 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [data, setAllData] = useState([]);
  const [cartItem, setCartItem] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/api/getproducts")
      .then((response) => response.json())
      .then((resData) => setAllData(resData));
  }, []);
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/api/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = data.find(
          (product) => product.product_id === Number(item)
        );
        totalAmount += itemInfo.newPrice * cartItem[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItems += cartItem[item];
      }
    }
    return totalItems;
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/api/removecart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  const contextValue = {
    data,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
export default ShopContextProvider;
