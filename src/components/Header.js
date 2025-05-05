import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar when a link is clicked
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-lg-none">
      <div className="container">
        {/* Button to toggle the sidebar on mobile */}
        <button className="btn btn-primary" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>

        <Link className="navbar-brand ms-3" to="#">My Portfolio</Link>
      </div>

      {/* Render the sidebar based on the state */}
      <div
        className={`offcanvas offcanvas-start ${isSidebarOpen ? 'show' : ''}`}
        style={{
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
        }}
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Offcanvas</h5>
          <button
            type="button"
            className="btn-close"
            onClick={toggleSidebar} // Close the sidebar
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <nav className="nav flex-column">
            <Link className="nav-link text-white" to="#home" onClick={closeSidebar}>Home</Link>
            <Link className="nav-link text-white" to="#about" onClick={closeSidebar}>About</Link>
            <Link className="nav-link text-white" to="#skills" onClick={closeSidebar}>Skills</Link>
            <Link className="nav-link text-white" to="#education" onClick={closeSidebar}>Education</Link>
            <Link className="nav-link text-white" to="#experience" onClick={closeSidebar}>Experience</Link>
            <Link className="nav-link text-white" to="#projects" onClick={closeSidebar}>Projects</Link>
            <Link className="nav-link text-white" to="#contact" onClick={closeSidebar}>Contact</Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
