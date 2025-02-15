import React from "react";
import { Link } from "react-router-dom"; // For navigation
import "../styles/Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/subscriptions">Subscriptions</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
          <div className="total-quantity">{props.totalQuantity}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
