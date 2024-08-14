import React from "react";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Render links if they exist */}
      {links && links.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default About;
