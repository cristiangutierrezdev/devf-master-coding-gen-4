import React from 'react';
import './CardApi.css'

function Card(props) {
  return (
    <div className='Card-functional'>
      <div className='autor'>{props.nombreAutor}</div>
      <img src={props.imagenAutor} className='imagen'></img>
      {/* <a href="{props.download_url}" target="_blank">Ver Imagen</a> */}
      
    </div>
  );
}

export default Card;


//https://unsplash.com/photos/yC-Yzbqy7PY