import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-icon">P</span> Pradip Garai
        </a>

        <ul className="nav-links">
          <li><Link smooth to="/#home" className="active">Home</Link></li>
          <li><Link smooth to="/#about">About</Link></li>
          <li><Link smooth to="/#skills">Skills</Link></li>
          <li><Link smooth to="/#education">Education</Link></li>
          <li><Link smooth to="/#projects">Projects</Link></li>
          <li><RouterLink to="/blogs">Blogs</RouterLink></li>
          <li><Link smooth to="/#contact">Contact</Link></li>
        </ul>

        <a href="/CV.pdf" className="btn-download" download>
          Download CV <FiDownload className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
