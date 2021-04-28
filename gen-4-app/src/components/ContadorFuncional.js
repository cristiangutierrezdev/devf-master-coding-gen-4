import React, { useState, useEffect } from 'react';

function ContadorFuncional(props) {
  const [numero, setNumero] = useState('Cargando...');

  const aumentar = () => {
    setNumero(numero + 1);
  };

  // Funciona como el componentDidMout (El componente se monto) cuando le
  // pasamos un arreglo vacio como segundo parametro
  useEffect(() => {
    setTimeout(() => {
      setNumero(10);
    }, 3000);
  }, []);

  // Funciona como el componentDidUpdate(El componente se actualizo) cuando le
  // pasamos un arreglo con la variable a escuchar, si la variable cambia
  // el useEffect se dispara
  useEffect(() => {
    if (typeof numero === 'number') {
      const titulo = document.getElementById('titulo-funcional');
      titulo.classList.toggle('color-red');
    }
  }, [numero]);

  return (
    <div>
      <h3 id='titulo-funcional' className=''>
        {props.titulo}
      </h3>
      <h5>{numero}</h5>

      {typeof numero === 'string' ? (
        ''
      ) : (
        <button onClick={aumentar}>Aumentar</button>
      )}
    </div>
  );
}

export default ContadorFuncional;
