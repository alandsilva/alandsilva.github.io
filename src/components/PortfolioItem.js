import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PortfolioItemStyles = styled.div`
  .portfolioItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }

  .portfolioItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .portfolioItem__title {
    font-size: 2.2rem;
  }
  .portfolioItem__desc {
    font-size: 1.8rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .portfolioItem__img  {
      height: 350px;
    }
  }
`;

const PortfolioItem = ({ item }) => {
  return (
    <PortfolioItemStyles>
      <Link to='/' className='portfolioItem__img'>
        <img src={require(`../assets/img/${item.image}`)} alt={item.name} />
      </Link>
      <div className='portfolioItem__info'>
        <Link to='/'>
          <h3 className='portfolioItem__title'>{item.name}</h3>
        </Link>
        <p className='portfolioItem__desc'>{item.description}</p>
      </div>
    </PortfolioItemStyles>
  );
};

export default PortfolioItem;
