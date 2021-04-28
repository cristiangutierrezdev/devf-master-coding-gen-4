import React, {useState} from 'react';
import Mensaje from './Mensaje';

function ShowComponent() {

  const [isShowing, setIsShowing] = useState(false)

  const cambiarIsShowing = ()=>{
    setIsShowing(!isShowing)
  }

  return (
    <div>
      <button onClick={cambiarIsShowing}>Click</button>
      {isShowing ? <Mensaje /> : ''}
    </div>
  );
}

export default ShowComponent;
