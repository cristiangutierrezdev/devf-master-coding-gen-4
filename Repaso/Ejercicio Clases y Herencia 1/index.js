// Ejercicio 1
// Hacer una superclase Maestro y subclases Maestro de Física y Maestro de Música y a cada uno asignarle su materia y calcular su promedio de grupo a partir de calificaciones (puedes usar arreglos). El maestro de física tiene un atributo antiguedad que guarda un valor numerico, mientras que el maestro de música tiene un atributo "edad" también guardando un valor numérico.
const array = [1, 2, 3, 4, 5]

class Maestro {
  constructor(materia, calificaciones) {
    this.materia = materia;
    this.calificaciones = calificaciones;
  }

  calcularPromedio() {
    let sumaTotal = 0;

    for (let index = 0; index < this.calificaciones.length; index++) {
      sumaTotal = sumaTotal + this.calificaciones[index]
    }

    const resultado = sumaTotal/this.calificaciones.length

    return resultado
  }
}

class MaestroDeFisica extends Maestro {
  constructor(materia, calificaciones, antiguedad) {
    super(materia, calificaciones);
    this.antiguedad = antiguedad;
  }
}

class MaestroDeMusica extends Maestro {
  constructor(materia, calificaciones, edad) {
    super(materia, calificaciones);
    this.edad = edad;
  }
}

const maestro1 = new MaestroDeFisica('Fisica', [2.3, 2, 4, 5, 3], 3)
// console.log(maestro1.calcularPromedio())

const maestro2 = new MaestroDeMusica('Musica', [3, 4.5, 5, 4.2, 2], 34)
console.log(maestro2.calcularPromedio())