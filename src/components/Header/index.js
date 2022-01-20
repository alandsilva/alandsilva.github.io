import React, {useState} from 'react';
import './Header.css';

import { HashLink as Link } from 'react-router-hash-link';


const Header = () => {

    const [show, setShow] = useState("");

    const toggle = () => {
        setShow(show === "" ? "nav-open": "")
        
    }
  return <header className={show}>
  {/* <div className="logo">
    <ul className="social-list">
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://github.com/alandsilva"
          target="_blank" rel="noreferrer"
          ><i className="fab fa-github"></i
        ></a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="https://www.linkedin.com/in/alandsilva/"
          target="_blank" rel="noreferrer"
          ><i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li className="social-list__item">
        <a
          className="social-list__link"
          href="mailto:dasilva.alan@outlook.com"
          target="_blank" rel="noreferrer"
          ><i className="fas fa-envelope"></i>
        </a>
      </li>
    </ul>
  </div> */}
  <button className="nav-toggle" aria-label="toggle navigation" onClick={toggle}>
    <span className="hamburger"></span>
  </button>
  <nav className='nav'>
    <ul className="nav__list">
      <li className="nav__item"><Link to="/#home"className="nav__link">Home</Link></li>
      <li className="nav__item">
      <Link to="/#skills"className="nav__link">Skills</Link>
      </li>
      <li className="nav__item">
      <Link to="/#work"className="nav__link">Projects</Link>
      </li>
      <li className="nav__item">
      <Link to="/#about"className="nav__link">Contact me</Link>
      </li>
    </ul>
  </nav>
</header>;
};

export default Header;
