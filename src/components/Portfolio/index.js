import React from 'react';
import './Portfolio.css';
import data from '../../data.json';

import Card from './Card'

const Portfolio = () => {
  return  <section className="my-work" id="work">
  <h2 className="section__title section__title--work">My Projects</h2>
  <p className="section__subtitle section__subtitle--work">
    A few school and personal projects
  </p>

  <div id="portfolio" className="portfolio">
    {data.map(item => <Card key={item.name} title={item.name} img={item.image} description={item.description} stack={item.stack}/>)}
  </div>
</section>;
};

export default Portfolio;
