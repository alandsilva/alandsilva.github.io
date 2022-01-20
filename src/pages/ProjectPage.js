import React from 'react';
import { useParams } from "react-router-dom";
import data from '../data.json'

const ProjectPage = () => {
    const params = useParams();
    const project = data.find(item => item.name === params.projectName)
    console.log(project)
  return <div>
      {project.image}
  </div>;
};

export default ProjectPage;
