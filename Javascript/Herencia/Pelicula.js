const Largometraje = require('./Largometraje');

class Pelicula extends Largometraje {
  constructor(duracion, director, animada, titulo, actores) {
    super(duracion, director, animada, titulo);
    this.actores = actores;
  }

  getActores() {
    let actores = 'Los actores son:';

    for (let i = 0; i < this.actores.length; i++) {
      actores = `${actores} ${this.actores[i]},`;
    }

    return actores;
  }
}

module.exports = Pelicula