import { Link } from "react-router-dom";
import "../App.css";
const Nav = ({ menu, setMenu }) => {
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
        <li className="app-list shop-menu">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/shop"
            onClick={() => setMenu("Shop")}
          >
            Shop
            {(menu === "Shop" ||
              menu === "Men" ||
              menu === "Women" ||
              menu === "Kid") && <hr color="#ce9aff" />}
          </Link>

          <ul className="dropdown-menu">
            <li className="dropdown-list">
              <Link
                style={{
                  textDecoration: "none",
                  color: menu === "Men" ? "#b260ff" : "inherit",
                }}
                to="/men"
                onClick={() => setMenu("Men")}
              >
                Men
              </Link>
            </li>
            <li className="dropdown-list">
              <Link
                style={{
                  textDecoration: "none",
                  color: menu === "Women" ? "#ce9aff" : "inherit",
                }}
                to="/women"
                onClick={() => setMenu("Women")}
              >
                Women
              </Link>
            </li>
            <li className="dropdown-list">
              <Link
                style={{
                  textDecoration: "none",
                  color: menu === "Kid" ? "#ce9aff" : "inherit",
                }}
                to="/kids"
                onClick={() => setMenu("Kid")}
              >
                Kid
              </Link>
            </li>
          </ul>
        </li>
        {/* <li className="app-list">
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
        </li> */}
      </ul>
    </nav>
  );
};
export default Nav;
