import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Harhs singh</h1>
      <p>Email: Harsh.singh.s64@kalvium.community</p>
      <p>Phone: +91 XXXXXXXXXX</p>

      <h2>About Me</h2>
      <p>
        Hi! I'm a passionate Full Stack Developer learning and building projects in 
        React, Node.js, and MongoDB. Always eager to explore new technologies!
      </p>

      <h2>Skills</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>✅ JavaScript (ES6+)</li>
        <li>✅ React & React Router</li>
        <li>✅ Node.js & Express.js</li>
        <li>✅ MongoDB & SQL</li>
        <li>✅ RESTful APIs</li>
        <li>✅ Git & GitHub</li>
      </ul>

      <h2>Social Media</h2>
      <p>
        <a href="https://github.com/Quick-Genius" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </p>
    </div>
  );
};

export default Home;