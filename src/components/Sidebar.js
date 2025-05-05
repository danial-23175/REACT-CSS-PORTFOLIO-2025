import React from 'react';
import profilePic from '../assets/images/profile.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // in src/index.js or App.js


const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white">
      <div className="profile text-center p-3">
        <img
          src={profilePic}
          className="img-fluid rounded-circle shadow-lg"
          id="profile-pic"
          alt="Profile"
        />
        <h4 className="mt-3">Danial Shakeel</h4>
        <p className="text-white">Web Development | Digital Marketing | SEO | Social Media marketing </p>
      </div>

      {/* Button to toggle offcanvas for mobile */}
      <button className="btn btn-primary d-block d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Toggle Offcanvas
      </button>

      {/* Offcanvas Component */}
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <nav className="nav flex-column">
            <a className="nav-link text-white" href="#home">Home</a>
            <a className="nav-link text-white" href="#about">About</a>
            <a className="nav-link text-white" href="#skills">Skills</a>
            <a className="nav-link text-white" href="#education">Education</a>
            <a className="nav-link text-white" href="#experience">Experience</a>
            <a className="nav-link text-white" href="#projects">Projects</a>
            <a className="nav-link text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </div>

      {/* Sidebar Nav Links for Larger Screens */}
      <nav className="nav flex-column p-3 d-none d-md-block">
        <a className="nav-link text-white" href="#home">Home</a>
        <a className="nav-link text-white" href="#about">About</a>
        <a className="nav-link text-white" href="#skills">Skills</a>
        <a className="nav-link text-white" href="#education">Education</a>
        <a className="nav-link text-white" href="#experience">Experience</a>
        <a className="nav-link text-white" href="#projects">Projects</a>
        <a className="nav-link text-white" href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Sidebar;
