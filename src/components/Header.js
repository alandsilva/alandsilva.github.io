import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-colod;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }

  .close-nav-icon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .nav-items {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .close-nav-icon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <NavMenuStyles>
      <div className='mobile-menu-icon'>
        <MdMenu
          onClick={() => {
            console.log('menu');
            toggle();
          }}
        />
      </div>
      <ul className={!show ? 'hide-item nav-items' : 'nav-items'}>
        <div className='close-nav-icon'>
          <MdClose
            onClick={() => {
              toggle();
            }}
          />
        </div>
        <li>
          <NavLink
            className='menu__item'
            to='/'
            onClick={() => {
              toggle();
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className='menu__item'
            to='/portfolio'
            onClick={() => {
              toggle();
            }}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            className='menu__item'
            to='/contact'
            onClick={() => {
              toggle();
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
};

export default Header;
