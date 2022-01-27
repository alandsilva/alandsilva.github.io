import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 2rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 28rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }

    .title {
      font-size: 2rem;
    }
  }
`;

const AboutInfoItem = ({ title = 'Title', items = ['item', 'JS'] }) => {
  return (
    <AboutItemStyles>
      <h1 className='title'>{title}</h1>
      <div className='items'>
        {items.map((item) => (
          <div key={item} className='item'>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
};

export default AboutInfoItem;
