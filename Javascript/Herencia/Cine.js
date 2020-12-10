const Pelicula = require('./Pelicula');
const Documental = require('./Documental');

class Cine {
  constructor(sala, largometraje) {
    this.sala = sala;
    this.largometraje = largometraje;
  }

  reproducirLargometraje() {
    const mensaje = `El largometraje ${this.largometraje.titulo} se esta presentando en la sala ${this.sala}`;

    return mensaje;
  }
}

const IronMan = new Pelicula(120, 'Jon Favreau', false, 'Iron Man', [
  'Robert Downey Jr.',
  'Terrence Howard',
  'Jeff Bridges',
]);

const Cosmos = new Documental(
  3000,
  'Brannon Braga',
  false,
  'Cosmos',
  'Neil deGrasse Tyson',
);

const Cineteca = new Cine(5, IronMan);
const Cineteca2 = new Cine(6, Cosmos);

console.log(Cineteca2.reproducirLargometraje());
