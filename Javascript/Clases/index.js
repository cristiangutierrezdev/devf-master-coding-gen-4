// Objeto Literal
// const carro = {
//   name: 'El furioso',
//   color: 'gris',
//   arrancar: function () {
//     return 'Estoy andando'
//   },
//   frenar () {
//     return 'Estoy frenando'
//   }
// }

class Carro {
  constructor(marca, color, puertas, placa, encendido = true) {
    this.marca = marca;
    this.color = color;
    this.puertas = puertas;
    this.placa = placa;
    this.encendido = encendido
  }

  arrancar() {
    return 'Estoy arrancando';
  }

  frenar() {
    return 'Estoy frenando';
  }

  obtenerInfoCarro () {
    const mensaje = `Tu carro es de marca ${this.marca} y de color ${this.color}, tiene ${this.puertas} y su placa es ${this.placa}`

    return mensaje
  }
}

const carroUno = new Carro('Ford', 'Gris', '5', 'AEI123');
const carroDos = new Carro('Mazda', 'Rojo', '2', 'IEA321');
const carroTres = new Carro('Renault', 'Negro', '5', 'OUE098');

console.log(carroDos.obtenerInfoCarro())
