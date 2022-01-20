import React from 'react';
import './Card.css';

const Card = (props) => {
  return <div onClick={() => {console.log('clicked')}} className="card">
      <img className="card__img" src={require(`../../img/${props.img}`)} alt={props.img}/>
      <div className="card__body">
          <h3 className="card__title">{props.title}</h3>
          <p className="card__description">{props.description}</p>
          <p className="card__technologies">
              {props.stack.map(tech => <span key={tech}>⋅{tech} </span>)}
          </p>
      </div>

  </div>;
};

export default Card;
