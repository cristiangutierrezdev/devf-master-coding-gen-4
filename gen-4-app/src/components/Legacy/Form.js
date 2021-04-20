import { useState, useEffect } from 'react';
import './Form.css';

function Form() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passValue, setPassValue] = useState('');

  const submit = () => {
    if (nameValue === '' || emailValue === '' || passValue === '') {
      alert('Por favor ingresa los datos');
    } else {
      alert(`Los datos se enviaron ${nameValue}, ${emailValue} y ${passValue}`);
    }
  };

  const onInputChange = (event) => {
    if (event.target.id === 'name') {
      setNameValue(event.target.value);
    } else if (event.target.id === 'email') {
      setEmailValue(event.target.value);
    } else {
      setPassValue(event.target.value);
    }
  };

  useEffect(()=>{
    if(nameValue !== '' && emailValue !== '' && passValue !== '') {
      document.querySelector('#btn').disabled = false
    } else {
      document.querySelector('#btn').disabled = true
    }
  }, [nameValue, emailValue, passValue])

  return (
    <div>
      <form className='Form'>
        <h3>Registro</h3>
        <input
          id='name'
          type='text'
          placeholder='ingresa tu nombre'
          className='input'
          onChange={onInputChange}
        />
        <input
          id='email'
          type='text'
          placeholder='ingresa tu email'
          className='input'
          onChange={onInputChange}
        />
        <input
          id='pass'
          type='password'
          placeholder='ingresa tu contrasenia'
          className='input'
          onChange={onInputChange}
        />
        <button id='btn' onClick={submit} type='button' className='btn'>
          Registrarse
        </button>
      </form>

      <h4>Hola tu nombre es: {nameValue}</h4>
      <h4>Tu Correo es: {emailValue}</h4>
    </div>
  );
}

export default Form;
