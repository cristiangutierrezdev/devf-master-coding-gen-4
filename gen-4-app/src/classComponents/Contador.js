import React, { Component } from 'react';
import './Contador.css';
class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: 'Cargando...',
    };
  }

  aumentar = () => {
    this.setState({
      numero: this.state.numero + 1,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        numero: 10,
      });
    }, 3000);
  }

  componentDidUpdate() {
    const titulo = document.getElementById('titulo');
    titulo.classList.toggle('color-orange');
  }

  render() {
    return (
      <div>
        <h3 id='titulo' className=''>
          {this.props.titulo}
        </h3>

        <h5>{this.state.numero}</h5>

        {typeof this.state.numero === 'string' ? (
          ''
        ) : (
          <button onClick={this.aumentar}>Aumentar</button>
        )}
      </div>
    );
  }
}

export default Contador;
