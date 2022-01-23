import React from 'react';
import './Introduction.css';
import image from '../img/alan.JPG';

const Introduction = () => {
  return (
    <div className='intro'>
      <div className='intro__img'>
        <img src={image} alt='Alan' />
        <p className='img__description'>Photo by my wonderful partner</p>
      </div>
      <div className='intro__text'>
        Hi, Im Alan. I'm an IT student at Oulu University of Applied Sciences.
        I'm a fullstack web deve
        <div className='intro__links'>
          <a href='https://github.com/alandsilva'>Github</a>
          <a href='https://www.linkedin.com/in/alandsilva/'>LinkedIn</a>
          <a href='mailto:dasilva.alan@outlook.com'>Email</a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
