
import React from 'react';
import './ProjectCard.module.css';  

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


export default ProjectCard;
