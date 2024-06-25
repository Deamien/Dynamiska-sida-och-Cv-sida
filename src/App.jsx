import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';
import CvSida from './components/Pages/CvSida';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CvSida />} />
        </Routes>
      </div>
  );
}

export default App;
