import { useState, useEffect } from 'react';
import './Contador.css';

function Contador(props) {
  const [numero, setNumero] = useState(0);

  const sumar = ()=>{
    const nuevoValor = numero + 1
    setNumero(nuevoValor)
  }

  useEffect(()=>{
    if(props.initialNumber) {
      setNumero(props.initialNumber)
    }
  }, [])

  useEffect(()=>{
    alert('el numero cambio')
  }, [numero])

  return (
    <div className='Contador'>
      <h4>Esto es un contador</h4>
      <p>{numero}</p>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
}

export default Contador;
