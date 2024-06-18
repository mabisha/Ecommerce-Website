import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Nav from "./components/nav";
import Home from "./container/Home/home";
import Contact from "./container/Contact/contact";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./App.css";
import { Shop } from "./container/Shop/shop";
import { ShopCategory } from "./container/ShopCategory/shopCategory";
import { Cart } from "./container/Cart/cart";
import { Login } from "./container/Login/login";
import Footer from "./components/footer";
import { Register } from "./container/Register/register";
import { Product } from "./container/Product/product";
import { useContext } from "react";
import { Shopcontext } from "./context/context";

const AppContent = ({ menu, setMenu }) => {
  const location = useLocation();
  const { getTotalCartItems } = useContext(Shopcontext);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenu("Home");
    } else if (path === "/contact") {
      setMenu("Contact");
    } else if (path.startsWith("/shop")) {
      setMenu("Shop");
    } else if (path === "/men") {
      setMenu("Men");
    } else if (path === "/women") {
      setMenu("Women");
    } else if (path === "/kids") {
      setMenu("Kids");
    } else if (path === "/login" || path === "/register") {
      setMenu("Login");
    } else if (path === "/cart") {
      setMenu("Cart");
    } else {
      setMenu("");
    }
  }, [location.pathname, setMenu]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 20px 0 20px",
        }}
      >
        <div>
          <h1 className="logo">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/"
              onClick={() => setMenu("Home")}
            >
              Fusion
            </Link>
          </h1>
        </div>
        <Nav menu={menu} setMenu={setMenu} />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              textDecoration: "none",
            }}
            onClick={() => setMenu("Login")}
          >
            <AccountCircleOutlinedIcon
              style={{
                marginRight: "20px",
                cursor: "pointer",
                color: menu === "Login" ? "#b469fa" : "black",
              }}
            />
          </Link>

          <div style={{ position: "relative" }}>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
              }}
              onClick={() => setMenu("Cart")}
            >
              <ShoppingCartOutlinedIcon
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                  color: menu === "Cart" ? "#b469fa" : "black",
                }}
              />
            </Link>

            <div className="shop-cart-counter">{getTotalCartItems()}</div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home menu={menu} setMenu={setMenu} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Shop />}></Route>
        </Route>
        <Route
          path="/men"
          element={
            <ShopCategory banner="../images/male-banner.jpg" category="men" />
          }
        />
        <Route
          path="/women"
          element={
            <ShopCategory
              banner="../images/female-banner.jpg"
              category="women"
            />
          }
        />
        <Route
          path="/kids"
          element={
            <ShopCategory banner="../images/kids-banner.jpg" category="kids" />
          }
        />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  const [menu, setMenu] = useState("Home");

  return (
    <Router>
      <AppContent menu={menu} setMenu={setMenu} />
    </Router>
  );
}

export default App;
