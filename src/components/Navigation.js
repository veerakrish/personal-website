import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'lab-manual', label: 'Lab Manual' },
    { id: 'courses', label: 'Course Materials' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all sections
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));
      
      // Find the current section
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop - 100; // Adjust for header
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {sections.map(section => (
          <button
            key={section.id}
            className={'nav-item ' + (activeSection === section.id ? 'active' : '')}
            onClick={() => handleNavClick(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
