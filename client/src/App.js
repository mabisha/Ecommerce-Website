import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./container/Home/home";
import Contact from "./container/Contact/contact";
import Blogs from "./container/Blogs/blogs";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./App.css";

function App() {
  const [menu, setMenu] = useState("Home");
  const handleOpenLogin = () => {
    console.log("helloe");
  };
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
          <AccountCircleOutlinedIcon
            style={{ marginRight: "20px", cursor: "pointer" }}
            onClick={handleOpenLogin}
          />
          {/* <FavoriteBorderOutlinedIcon
            style={{ marginRight: "10px", cursor: "pointer" }}
          /> */}
          <div style={{ position: "relative" }}>
            <ShoppingCartOutlinedIcon
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <div className="shop-cart-counter">0</div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/shop" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
