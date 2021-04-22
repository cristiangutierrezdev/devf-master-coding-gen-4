import React from 'react';
// import './Card.css';
import './Card.scss';

function Card(props) {
    return (
        <div className='mainDiv-Card'>
            <div className='Card-title'> 
                <p className='p-title'> Autor: {props.author} </p> 
            </div>
            <div className='Card-desc'>
                <img src={props.img} className='Card-img'></img>
                <p className='p-desc'> Size: {props.width} x {props.height} </p>
                {/* <button>More Info</button> */}
            </div>
        </div>
    )
};

export default Card;
