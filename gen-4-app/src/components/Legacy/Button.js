import './Button.css';

function Button(props) {
  const showAlert = () => {
    alert(`Mi nombre es ${props.user} y tengo ${props.edad} anios`);
  };

  return (
    <div>
      <button className='Button' onClick={showAlert}>
        has click aqui {props.user}
      </button>
    </div>
  );
}

export default Button;
