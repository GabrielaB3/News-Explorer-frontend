import React from "react";
import "./About.css";
import authorImage from "../../assets/author.png";

function About() {
  return (
    <section className="about">
      <img src={authorImage} alt="Gabriela" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Hello! I'm Gabriela, a Full-Stack Developer with a background in
          Business Administration. My unique perspective allows me to bridge the
          gap between logical efficiency and real-world business needs.
        </p>
        <p className="about__description">
          Through my training at TripleTen, I've mastered React, Node.js, and
          Express, building scalable projects from scratch. I leverage
          AI-powered tools to automate complex processes and optimize
          development workflows, creating seamless, high-quality digital
          experiences with modern efficiency.
        </p>
      </div>
    </section>
  );
}

export default About;
