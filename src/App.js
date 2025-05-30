import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main className="main-content">
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
