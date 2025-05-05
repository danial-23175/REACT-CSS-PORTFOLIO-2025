// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard'; 
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';

const Projects = () => {
  return (
    <section id="projects" className="py-5 text-center">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="row justify-content-center">
          <div className="col-md-5">
          <ProjectCard
            image={project1}
            title="Project One" 
          />
          </div>
          <div className="col-md-5">
            <ProjectCard
              image={project2}
              title="Project Two"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
