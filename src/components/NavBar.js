import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;