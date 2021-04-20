import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: props.titulo,
      desc: props.desc,
    };
  }

  componentDidMount(){
    this.setState({...this.state, titulo: 'Cambiado' })
  }
  
  // componentDidUpdate(){
  //   alert('El componente se actualizo')
  // }

  cambiarTitulo = () => {
    this.setState({...this.state, titulo: this.props.titulo})
  }

  render() {
    return (
      <div className='Card'>
        <div className='titulo'>{this.state.titulo}</div>
        <div className='desc'>{this.state.desc}</div>
        <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
      </div>
    );
  }
}

export default Card;
