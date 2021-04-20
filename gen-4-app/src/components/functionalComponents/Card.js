import React from 'react';
import './Card.css'

function Card(props) {
  return (
    <div className='Card-functional'>
      <div className='titulo'>{props.titulo}</div>
      <div className='desc'>{props.description}</div>
      <button>{props.button_text}</button>
    </div>
  );
}

export default Card;
