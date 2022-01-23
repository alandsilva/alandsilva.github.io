import React from 'react';

const Footer = () => {
  return <footer>
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
  </footer>;
};

export default Footer;
