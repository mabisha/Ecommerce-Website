import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

function App() {
  const [menu, setMenu] = useState("Home");
  return (
    <Router>
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
              color: "black",
            }}
            onClick={() => setMenu("")}
          >
            <AccountCircleOutlinedIcon
              style={{ marginRight: "20px", cursor: "pointer" }}
            />
          </Link>

          <div style={{ position: "relative" }}>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              onClick={() => setMenu("")}
            >
              <ShoppingCartOutlinedIcon
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
            </Link>

            <div className="shop-cart-counter">0</div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />}>
          <Route path=":productId" element={<Shop />}></Route>
        </Route>
        <Route path="/men" element={<ShopCategory category="men" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
