const Largometraje = require('./Largometraje');

class Documental extends Largometraje {
  constructor(duracion, director, animada, titulo, narrador) {
    super(duracion, director, animada, titulo);
    this.narrador = narrador;
  }

  getNarrador() {
    const mensaje = `El narrador de este documenta es ${this.narrador}`;
    return mensaje;
  }
}

module.exports = Documental;
