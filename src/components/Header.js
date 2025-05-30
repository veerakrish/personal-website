import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-container">
        <div className="profile-image">
          <img src="/itsme.png" alt="Profile" />
        </div>
        <h1>Mr. Viswanath Veera Krishna Maddinala</h1>
        <p className="role">Assistant Professor & Research Scholar</p>
        <p className="tagline">Specializing in LLMs, Computer Networks, and Data Science</p>
      </div>
    </header>
  );
};

export default Header;
