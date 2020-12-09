let nombre = 'Cristian';
const apellido = 'Gutierrez';

// template string
const getName = () => `<--- ${nombre} ${apellido} --->`;

// console.log(getName())

// Destructuracion de Arreglos
const persona = ['John', 30, false];

// const nombrePersona = persona[0]
// const edad = persona[1]
// const esCasado = persona[2]

const [nombrePersona, edad, esCasado] = persona;

// console.log(nombrePersona)
// console.log(edad)
// console.log(esCasado)

// Destructuracion de Objetos
const carro = {
  color: 'gris',
  marca: 'Ford',
  cilindros: 16,
  usado: true,
};

const { color, marca, cilindros, usado } = carro;

// console.log(color)

const edadSimon = 16;

function esMayor() {
  // if (edadSimon >= 18) {
  //   return 'Es mayor de edad';
  // } else {
  //   return 'Es menor de edad';
  // }
  const operacion = edadSimon >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
  return operacion;
}

// console.log(esMayor());

// Parametros

function obtenerCoke(dinero) {
  const proceso =
    dinero === 15
      ? 'Toma tu Cocacola'
      : 'Por favor ingresa el dinero correspondiente';

  return proceso;
}

// console.log(obtenerCoke(15))

function suma(numeroA, numeroB) {
  const resultado = numeroA + numeroB;

  return resultado;
}

const users = {
  123: {
    nombre: 'Cristian',
    apellido: 'Gutierrez',
  },
  321: {
    nombre: 'John',
    apellido: 'Doe',
  },
};

function obtenerUsuario(userid) {
  const user = users[userid];
  const resultado = user === undefined ? 'Id invalido' : unirNombre(user);

  return resultado;
}

function unirNombre(user) {
  const nombreCompleto = `${user.nombre} ${user.apellido}`;
  return nombreCompleto;
}
