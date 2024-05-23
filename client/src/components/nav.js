import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import "../App.css";
function Nav() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ul className="app-header">
          <li className="app-list">
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li className="app-list">
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default Nav;
