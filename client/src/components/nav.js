import { Link } from "react-router-dom";
import "../App.css";
function Nav() {
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
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
        </li>
        <li className="app-list">
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About Us
          </Link>
        </li>
        <li className="app-list">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className="app-list">
          <Link style={{ textDecoration: "none", color: "black" }} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
