import React from 'react';
import './Introduction.css';
import image from '../../img/alan.JPG';

const Introduction = () => {
  return <section className="intro" id="home">
  <h2 className="section__title section__title--intro">
    Hi, I am <strong>Alan Da Silva</strong>
  </h2>
  <p className="section__subtitle section__subtitle--intro">
    IT student
  </p>
  <img
    className="intro__img"
    src={image}
    alt="Alan Da Silva"
  />
</section>;
};

export default Introduction;
