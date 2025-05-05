// src/pages/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-5 text-center">
      <div className="container">
        <h2>Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <h5>Digital Marketing</h5>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{ width: '90%' }}>90%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>SEO</h5>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: '85%' }}>85%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>WORDPRESS</h5>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: '85%' }}>85%</div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>SHOPIFY</h5>
            <div className="progress">
              <div className="progress-bar bg-primary" style={{ width: '90%' }}>90%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
