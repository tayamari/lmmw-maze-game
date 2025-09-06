import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css'


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div>
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <button 
            className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="navigation-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
          <div 
            className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}
            id="navigation-menu"
            role="menu"
            aria-hidden={!isMobileMenuOpen}
          >
            <Link to="/" className="nav-link" role="menuitem" aria-label="Go to Home page" tabIndex="0" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" className="nav-link" role="menuitem" aria-label="Go to About page" tabIndex="0" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" className="nav-link" role="menuitem" aria-label="Go to Contact page" tabIndex="0" onClick={toggleMobileMenu}>Contact</Link>
          </div>
        </nav>
        <Outlet />
      </div>
    </> 
  );
}

export default App;
