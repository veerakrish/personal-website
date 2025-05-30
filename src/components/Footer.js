import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/veerakrish" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Krishna Sir. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
