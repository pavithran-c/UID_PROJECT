// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/order-history">Order History</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
