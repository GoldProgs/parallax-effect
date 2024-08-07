import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainPage from './MainPage';
import Menu from './Menu';
import Services from './Services';
import About from './About';
import Contact from './Contact';

function App() {
  return (
     
     <ParallaxProvider>
     <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
      </div>
     </Router> 
   </ParallaxProvider>
  );
}

export default App;