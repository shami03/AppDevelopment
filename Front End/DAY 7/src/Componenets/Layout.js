import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons'; // Import the faBars icon
import './Layout.css';

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav>
        <div className="Navlist">
          <ul>
            <div className="Navli">
              <li className="hamburger">
                <div className="HamburgerIcon" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </li>
              <li>
                <div className="Homeicon" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faHome}/>  Dashboard
                  </Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      {children}
      {showMenu && (
        <div className="mobile-menu">
          {/* Add your menu items here */}
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {/* You can add more menu items as needed */}
        </div>
      )}
    </div>
  );
}