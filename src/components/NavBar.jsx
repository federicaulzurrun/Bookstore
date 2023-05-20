import React from 'react';
import '../style/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <div className="navTitle">
      <h1>Bookstore CMS</h1>
      <Link to="/" className="navItems">Books</Link>
      <NavLink to="/Categories" className="navItems cat">Categories</NavLink>
    </div>
  </nav>
);

export default NavBar;
