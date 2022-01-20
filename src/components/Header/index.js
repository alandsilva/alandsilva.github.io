import React, {useState} from 'react';
import './Header.css'


const Header = () => {

    const [show, setShow] = useState("");

    const toggle = () => {
        setShow(show === "" ? "nav-open": "")
        
    }
  return <header className={show}>
  <div className="logo">
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
  </div>
  <button className="nav-toggle" aria-label="toggle navigation" onClick={toggle}>
    <span className="hamburger"></span>
  </button>
  <nav className='nav'>
    <ul className="nav__list">
      <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
      <li className="nav__item">
        <a href="#skills" className="nav__link">My skills</a>
      </li>
      <li className="nav__item">
        <a href="#about" className="nav__link">About me</a>
      </li>
      <li className="nav__item">
        <a href="#work" className="nav__link">Projects</a>
      </li>
    </ul>
  </nav>
</header>;
};

export default Header;
