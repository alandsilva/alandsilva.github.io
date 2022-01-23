import React, { useState } from 'react';
import './Header.css';

import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [show, setShow] = useState('');

  const toggle = () => {
    setShow(show === '' ? 'nav-open' : '');
  };
  return (
    <header className={show}>
      <div className='logo'>
        <Link to='/'>Alan Da Silva</Link>
      </div>

      <div class='menu'>
        <Link className='menu__item' to='/'>
          Work
        </Link>
        <Link className='menu__item' to='/info'>
          Info
        </Link>
      </div>
      <span className='nav__container'>
        <button
          className='nav-toggle'
          aria-label='toggle navigation'
          onClick={toggle}
        >
          <span className='hamburger'></span>
        </button>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link to='/#home' className='nav__link'>
                Home
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='/#skills' className='nav__link'>
                Skills
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='/#work' className='nav__link'>
                Projects
              </Link>
            </li>
            <li className='nav__item'>
              <Link to='/#about' className='nav__link'>
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </span>
    </header>
  );
};

export default Header;
