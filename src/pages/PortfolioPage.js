import React from 'react';
import './Portfolio.css';
import data from '../data.json';

import Card from '../components/Card';

const Portfolio = () => {
  return (
    <div>
      <p>A few school and personal projects</p>
      <div id='portfolio' className='portfolio'>
        {data.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            img={item.image}
            description={item.description}
            stack={item.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
