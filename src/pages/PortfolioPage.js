import React from 'react';
import data from '../data.json';
import SectionTitle from '../components/SectionTitle';
import PortfolioItem from '../components/PortfolioItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const PortfolioStyles = styled.div`
  padding: 10rem 0;
  .portfolio__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-wrapper {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 50px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .portfolio__allItems {
      display: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
    }
  }
`;

const Portfolio = () => {
  return (
    <PortfolioStyles>
      <div className='container'>
        <SectionTitle subtitle='some of my recent works' title='Projects' />
        <div className='portfolio__allItems'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((project) => {
              return (
                <SwiperSlide key={project.name}>
                  <PortfolioItem item={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </PortfolioStyles>
  );
};

export default Portfolio;
