import React from 'react';
import './Skills.css';

const skills = [
  {
    title: "Full Stack Web Applications",
    description: "Developing full stack from idea to complete product using the latest tools"
  },
  {
    title: "DevOps",
    description: "Using docker and docker-compose for basic orchestration"
  }
]

const Skills = () => {
  return <section className="my-skills" id="skills">
  <h2 className="section__title section__title--skills">Skills</h2>
  <div className="skills">
    {skills.map(skill => <Skill skill={skill}/>) }
  </div>

  <a href="#work" className="btn">My Projects</a>
</section>;
};

const Skill = ({skill}) => {
  return <div className="skill">
  <h3>{skill.title}</h3>
  <p>{skill.description}</p>
</div>

}

export default Skills;
