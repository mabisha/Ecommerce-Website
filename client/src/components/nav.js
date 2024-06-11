import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
const Nav = ({ menu, setMenu }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ul className="app-header">
        <li className="app-list">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/"
            onClick={() => setMenu("Home")}
          >
            Home {menu === "Home" ? <hr color="#ce9aff" /> : ""}
          </Link>
        </li>
        <li className="app-list">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/shop"
            onClick={() => setMenu("Shop")}
          >
            Shop {menu === "Shop" ? <hr color="#ce9aff" /> : <></>}
          </Link>
        </li>
        <li className="app-list">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/contact"
            onClick={() => setMenu("Contact")}
          >
            Contact {menu === "Contact" ? <hr color="#ce9aff" /> : <></>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
