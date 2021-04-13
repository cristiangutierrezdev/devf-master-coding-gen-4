import React, { Component } from 'react';
import './Contador.css'

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: 'Loading...',
    };
  }

  aumentar = () => {
    this.setState({
      numero: this.state.numero + 1,
    });
  };

  componentDidUpdate() {
    const titulo = document.getElementById('titulo');
    titulo.className = ''

    if(this.state.numero >= 10 && this.state.numero < 20) {
      titulo.classList.add('color-blue')
    } else if (this.state.numero >= 20 && this.state.numero < 30) {
      titulo.classList.add('color-red')
    } else {
      titulo.classList.add('color-orange')
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        numero: 10,
      });
    }, 3000);
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
