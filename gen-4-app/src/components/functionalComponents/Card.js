import React, {useState} from 'react';
import { Progress } from 'reactstrap';
// import './Card.css'
// import './Card.scss';

function Card(props) {
  const [value, setValue] = useState(0)


  const aumentar = ()=>{
    setValue(value + 10)
  }

  const disminuir = ()=>{
    setValue(value - 10)
  }

  return (
    <div className='Card-functional'>
      <div className='Card-functional__titulo'>{props.titulo}</div>
      <div className='Card-functional__description'>
        {props.description}{' '}
        <span className='Card-functional--resaltado'>Cualquier cosa</span>
      </div>

    {/*
      <div
        id='Card-functional__progress'
        className='progress Card-functional__progress'>
        <div
          style={{width: value+'%'}}
          id='Card-functional__progress-bar'
          class='progress-bar Card-functional__progress-bar'
          role='progressbar'
          aria-valuenow='25'
          aria-valuemin='0'
          aria-valuemax='100'></div>
      </div> */}

      <Progress value={value} className='Card-functional__progress'/>
      <button onClick={aumentar} className='Card-functional__button mr-2'>
        {props.button_text}
      </button>
      <button onClick={disminuir} className='Card-functional__button ml-2'>
        {props.button_text_less}
      </button>
    </div>
  );
}

export default Card;
