import React, { useState } from 'react';

function ContadorFuncional(props) {

  const [numero, setNumero] = useState(0);

  const aumentar = ()=>{
    setNumero(numero + 1)
  }

  return (
    <div>
      <h3 id='titulo-funcional' className=''>
        {props.titulo}
      </h3>
      <h5>{numero}</h5>

      <button onClick={aumentar}>Aumentar</button>
    </div>
  );
}

export default ContadorFuncional;
