import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const ProjectPage = () => {
  const params = useParams();
  const project = data.find((item) => item.name === params.projectName);
  console.log(project);
  return (
    <div>
      <div className='project__links'>
        <p>
          <strong>Info</strong>
        </p>
        <p>{project.info}</p>
        <p>
          <strong>Links</strong>
        </p>
        {project.links.map((link) => (
          <p>
            <a href={link.url}>{link.message}</a>
          </p>
        ))}
      </div>
      <div className='project'>
        {project.images.map((img) => (
          <div className={`project__item ${img.type}`} key={img.image}>
            <img
              className='project__img'
              src={require(`../assets/img/${img.image}`)}
              alt={img.image}
            />
          </div>
        ))}
        {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default ProjectPage;
