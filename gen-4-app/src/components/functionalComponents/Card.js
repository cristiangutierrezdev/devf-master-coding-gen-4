import React from 'react';
import { Progress } from 'reactstrap';
// import './Card.css'
// import './Card.scss';

function Card(props) {
  return (
    <div className='Card-functional'>
      <div className='Card-functional__titulo'>{props.titulo}</div>
      <div className='Card-functional__description'>
        {props.description}{' '}
        <span className='Card-functional--resaltado'>Cualquier cosa</span>
      </div>

      <div className='progress Card-functional__progress'>
        <div
          class='progress-bar Card-functional__progress-bar'
          role='progressbar'
          aria-valuenow='25'
          aria-valuemin='0'
          aria-valuemax='100'></div>
      </div>

      {/* <Progress value={75} className='Card-functional__progress'/> */}
      <button className='Card-functional__button'>{props.button_text}</button>
    </div>
  );
}

export default Card;
