import React from 'react';
import './Skills.css'

const Skills = () => {
  return <section className="my-skills" id="skills">
  <h2 className="section__title section__title--skills">Skills</h2>
  <div className="skills">
    <div className="skill">
      <h3>Full Stack Web Applications</h3>
      <p>
        Developing full stack from inception to realization using the latest
        tools
      </p>
    </div>
    

    <div className="skill">
      <h3>React Native Applications</h3>
      <p>Designing and developing hybrid mobile applications</p>
    </div>
  </div>
  

  <a href="#work" className="btn">My Projects</a>
</section>;
};

export default Skills;
