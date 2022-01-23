import React from 'react';
import data from '../data.json';

const Portfolio = () => {
  return (
    <div>
      this is the portfolio page
      {/* <p>Click to view Details</p>
      <div id='portfolio' className='portfolio'>
        {data.map((item) => (
          <div className='portfolio__item'>
            <a href={`/${item.name}`}>
              <img src={require(`../img/${item.image}`)} alt='' />
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Portfolio;
