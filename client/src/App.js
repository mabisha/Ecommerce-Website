import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import Contact from "./components/contact";
import Blogs from "./components/blogs";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./App.css";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 className="logo">Fusion</h1>
        </div>
        <Nav />
        <div>
          <AccountCircleOutlinedIcon
            style={{ marginRight: "10px" }}
          ></AccountCircleOutlinedIcon>
          <FavoriteBorderOutlinedIcon
            style={{ marginRight: "10px" }}
          ></FavoriteBorderOutlinedIcon>
          <ShoppingCartOutlinedIcon
            style={{ marginRight: "10px" }}
          ></ShoppingCartOutlinedIcon>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
