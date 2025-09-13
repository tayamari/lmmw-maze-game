import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Optionally prevent background scroll on mobile menu open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header>
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <div className="nav-brand">
            <Link to="/" className="nav-logo" aria-label="Go to Home page">MyGame</Link>
          </div>
          <button 
            className={`hamburger-menu${isMobileMenuOpen ? ' active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-controls="navigation-menu"
            type="button"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div 
            className={`nav-links${isMobileMenuOpen ? ' nav-links-open' : ''}`}
            id="navigation-menu"
            role="menu"
            aria-hidden={isMobileMenuOpen ? "false" : "true"}
          >
            <Link to="/" className="nav-link" role="menuitem" aria-label="Go to Home page" tabIndex="0" onClick={closeMobileMenu}>Home</Link>
            <Link to="/about" className="nav-link" role="menuitem" aria-label="Go to About page" tabIndex="0" onClick={closeMobileMenu}>About</Link>
            <Link to="/contact" className="nav-link" role="menuitem" aria-label="Go to Contact page" tabIndex="0" onClick={closeMobileMenu}>Contact</Link>
          </div>
        </nav>
        {/* Optional: Add a backdrop for mobile menu */}
        {isMobileMenuOpen && <div className="nav-backdrop" onClick={closeMobileMenu}></div>}
      </header>
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
