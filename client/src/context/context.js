import React, { createContext } from "react";
import data from "../assets/data.json";
export const Shopcontext = createContext(null);
const ShopContextProvider = (props) => {
  const contextValue = { data };
  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
export default ShopContextProvider;
