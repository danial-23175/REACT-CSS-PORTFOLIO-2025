// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center bg-light">
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <input type="text" className="form-control mb-3" placeholder="Your Name" required />
          <input type="email" className="form-control mb-3" placeholder="Your Email" required />
          <textarea className="form-control mb-3" rows="4" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-dark">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
