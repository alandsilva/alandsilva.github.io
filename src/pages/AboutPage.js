import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import Button from '../components/Button';
import PText from '../components/PText';
import image from '../img/alan.JPG';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }

  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }

  .right {
    img  {
      border: 2px solid var(--gray-1);
    }
  }

  .about-info__items {
    margin-top: 15rem;
  }
  .about-info__item {
    margin-top: 10rem;
  }
  .about-info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about-info__heading {
      font-size: 3rem;
    }
    .about-info__subheading {
      font-size: 1.8rem;
    }
  }
`;

const About = () => {
  return (
    <AboutPageStyles>
      <div className='container'>
        <div className='top-section'>
          <div className='left'>
            <p className='about__subheading'>
              Hi, Im <span>Alan</span>
            </p>
            <h2 className='about__heading'>IT student</h2>
            <div className='about__info'>
              <PText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem eius amet quisquam veritatis voluptatibus modi
                alias, neque optio aspernatur temporibus molestias, hic non
                voluptate, ipsa odit dolore.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem eius amet quisquam veritatis voluptatibus modi
                alias, neque optio aspernatur temporibus molestias, hic non
                voluptate, ipsa odit dolore.
                <br />
              </PText>
            </div>
            <Button>Download CV</Button>
          </div>
          <div className='right'>
            <img src={image} alt='Alan' />
          </div>
        </div>
        <div className='about-info__items'>
          <div className='about-info__item'>
            <h1 className='about-info__heading'>education</h1>
            <AboutInfoItem
              title='University'
              items={['Oulu University of Applied Sciences']}
            />
          </div>
          <div className='about-info__item'>
            <h1 className='about-info__heading'>skills</h1>
            <AboutInfoItem
              title='Frontend'
              items={['HTML', 'CSS', 'JavaScript', 'React']}
            />
            <AboutInfoItem
              title='Backend'
              items={['Node.js', 'Express.js', 'TypeScript']}
            />
            <AboutInfoItem
              title='Containerization'
              items={['Docker', 'Docker Compose']}
            />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
};

export default About;
