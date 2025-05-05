// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" className="hero-section text-center py-5">
      <div className="container">
        <h1 className="mt-3">Danial Shakeel</h1>
        <p className="lead">Web Development | Digital Marketing | SEO | Social Media marketing</p>
        <a
          href="https://www.linkedin.com/in/danial-shakeel/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg mt-3"
        >
          Click Here to visit my Linkdin and Past work
        </a>
      </div>
    </section>
  );
};

export default Home;
