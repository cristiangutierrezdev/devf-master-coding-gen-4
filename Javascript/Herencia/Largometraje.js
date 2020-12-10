class Largometraje {
  constructor(duracion, director, animada, titulo) {
    this.duracion = duracion;
    this.director = director;
    this.animada = animada;
    this.titulo = titulo;
  }

  getInfo() {
    const info = `Duracion: ${this.duracion}, Director: ${this.director}, Es animada? : ${this.animada}`;

    return info;
  }
}

module.exports = Largometraje;
