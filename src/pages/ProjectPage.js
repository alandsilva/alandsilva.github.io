import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import SectionTitle from '../components/SectionTitle';
import styled from 'styled-components';
import { MdWeb, MdPlayCircleFilled } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import PText from '../components/PText';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectStyles = styled.div`
  max-width: 100;
  p {
    font-size: 1.2rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .project__links {
    display: flex;
    gap: 5rem;
    font-size: 2rem;
    align-items: center;
    justify-content: space;

    a {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      background-color: var(--deep-dark);
      padding: 1rem;
      border-radius: 8px;
      font-size: 1rem;
    }
    svg {
      width: 2rem;
    }
  }
  .project__images {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 5rem;
    img {
      max-height: 400px;
      object-fit: contain;
    }
  }

  .stack__list {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    p {
      background-color: var(--deep-dark);
      padding: 1rem;
      border-radius: 8px;
      font-size: 1.2rem;
    }
  }
`;

const ProjectPage = () => {
  const params = useParams();
  const project = data.find((item) => item.name === params.projectName);
  console.log(project);
  return (
    <ProjectStyles>
      <div className='container'>
        <SectionTitle subtitle={project.description} title={project.name} />
        <div className='project__links'>
          {project.links.map((link) => (
            <a href={link.url}>
              <div className='icon'>{getIcon(link.type)}</div>
              <div className='text'>
                <PText>{link.message}</PText>
              </div>
            </a>
          ))}
        </div>
        <div className='project__images'>
          <Swiper spaceBetween={30} slidesPerView={1} navigation>
            {project.images.map((image) => {
              return (
                <SwiperSlide>
                  <img src={require(`../assets/img/${image}`)} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='project__info'>
          <h2>About</h2>
          <p>{project.info}</p>
        </div>
        <div className='project__stack'>
          <h2>Technologies</h2>
          <div className='stack__list'>
            {project.stack.map((tech) => (
              <p>{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </ProjectStyles>
  );
};

const getIcon = (type) => {
  switch (type) {
    case 'website':
      return <MdWeb />;
    case 'code':
      return <FaGithub />;
    case 'video':
      return <MdPlayCircleFilled />;
    default:
      return <></>;
  }
};

export default ProjectPage;
