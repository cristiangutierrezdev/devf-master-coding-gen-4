import React from 'react';
// import './Card.css'
// import './Card.scss';

function Card(props) {
  return (
    <div className='Card-functional'>
      <div className='Card-functional__titulo'>{props.titulo}</div>
      <div className='Card-functional__description'>
        {props.description} {' '}
        <span className='Card-functional--resaltado'>Cualquier cosa</span>
      </div>
      <button className='Card-functional__button'>{props.button_text}</button>
    </div>
  );
}

export default Card;
