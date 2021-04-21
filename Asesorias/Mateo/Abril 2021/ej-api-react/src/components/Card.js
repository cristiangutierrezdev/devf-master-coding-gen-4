import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='mainDiv-Card'>
            <div className='Card-title'> 
                <p className='p-title'> {props.author} </p> 
            </div>
            <div className='Card-desc'> {} <p className='p-desc'> asd asd asdasd asd asdasd asd asdasd asd asdasd asd asdasd asd asdasd asd asdasd asd asd</p>
                {/* <button>More Info</button> */}
            </div>
        </div>
    )
};

export default Card;
