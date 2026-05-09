import { useState, useEffect } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-icon">P</span> Pradip Garai
        </a>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link smooth to="/#home" className="active" onClick={closeMenu}>Home</Link></li>
          <li><Link smooth to="/#about" onClick={closeMenu}>About</Link></li>
          <li><Link smooth to="/#skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link smooth to="/#education" onClick={closeMenu}>Education</Link></li>
          <li><Link smooth to="/#projects" onClick={closeMenu}>Projects</Link></li>
          <li><RouterLink to="/blogs" onClick={closeMenu}>Blogs</RouterLink></li>
          <li><Link smooth to="/#contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="nav-right">
          <a href="/CV.pdf" className="btn-download" download>
            <span>Download CV</span> <FiDownload className="icon" />
          </a>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
