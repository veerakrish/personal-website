import React from 'react';
import '../styles/Links.css';

const Links = () => {
  const links = [
    {
      title: 'About Me',
      url: '#about',
      icon: '👨‍🏫'
    },
    {
      title: 'Cloud Computing Lab Manual',
      url: '#lab-manual',
      icon: '☁️'
    },
    {
      title: 'Course Materials',
      url: '#courses',
      icon: '📚'
    },
    {
      title: 'Contact',
      url: '#contact',
      icon: '📧'
    }
  ];

  return (
    <div className="links-container">
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          className="link-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-icon">{link.icon}</span>
          <span className="link-title">{link.title}</span>
        </a>
      ))}
    </div>
  );
};

export default Links;
