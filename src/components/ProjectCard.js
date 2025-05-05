// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.module.css';  // Import the CSS module

const ProjectCard = ({ image, title }) => {
  return (
    <div className="card shadow-sm project-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

// Export the component correctly
export default ProjectCard;
