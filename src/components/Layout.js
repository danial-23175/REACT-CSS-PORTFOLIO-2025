// src/components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

// Import all sections directly (as components)
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Layout = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content">
        <Header />

        {/* All sections rendered directly in layout */}
        <Home />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
