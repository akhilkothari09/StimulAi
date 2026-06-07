import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when location changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  return (
    <>
      <div className="navbar-status-bar">
        <div><span className="status-dot"></span>SYS STATUS: OPERATIONAL</div>
        <div>LATENCY: 2.0ms // LINK: SECURE</div>
        <div>NODE_SYS: v1.04</div>
      </div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} style={{ top: '21px' }}>
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" aria-label="STIMULAI Home">STIMULAI</Link>
          
          <div className="navbar-menu">
            <NavLink to="/technology" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Technology</NavLink>
            <NavLink to="/products" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Products</NavLink>
            <NavLink to="/philosophy" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Philosophy</NavLink>
            <NavLink to="/careers" className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>Careers</NavLink>
            <Button to="/contact" variant="primary" className="navbar-cta">Initialize Session</Button>
          </div>
          
          <button className={`navbar-hamburger ${isOpen ? 'active' : ''}`} aria-label="Toggle Menu" aria-expanded={isOpen} aria-controls="mobile-nav" onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`} id="mobile-nav">
        <div className="mobile-nav-menu">
          <NavLink to="/technology" className="mobile-nav-link">Technology</NavLink>
          <NavLink to="/products" className="mobile-nav-link">Products</NavLink>
          <NavLink to="/philosophy" className="mobile-nav-link">Philosophy</NavLink>
          <NavLink to="/careers" className="mobile-nav-link">Careers</NavLink>
          <NavLink to="/contact" className="mobile-nav-link">Initialize Session</NavLink>
        </div>
        <div className="mobile-nav-tagline">TRUST THE PULL</div>
      </div>
    </>
  );
}
