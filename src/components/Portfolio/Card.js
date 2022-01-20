import React from 'react';
import './Card.css';

import { Link } from "react-router-dom";

const Card = (props) => {
  return <Link to={`/${props.title}`}  className="card">
      <img className="card__img" src={require(`../../img/${props.img}`)} alt={props.img}/>
      <div className="card__body">
          <h3 className="card__title">{props.title}</h3>
          <p className="card__description">{props.description}</p>
          <p className="card__technologies">
              {props.stack.map(tech => <span key={tech}>⋅{tech} </span>)}
          </p>
      </div>

  </Link>;
};

export default Card;
