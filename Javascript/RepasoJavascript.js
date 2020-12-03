// Tipos de datos - data types

var name = 'Cristian'; // String
var age = 26; // Number
var isAlive = false; // Boolean
var pets; // Undefined
var children = null; // null

// Tipos de variables - Variable types

var email = 'test@test.com'; // Deprecated
let newEmail = 'test2@test2.com';
const myEmail = 'cristian@test.com';

// Tipos de Funciones - Function types

function color() {
  let a = 're';
  let b = 'd';
  return a + b;
}

const result = color();

// Function -- Sipuedo acceder al this y soy global
function accion() {
  document.getElementById('main').style.color = result;
}

accion();

// Anonym fucntions -- Si puedo acceder al this pero no soy global
const otraFuncion = function () {
  console.log('Hola soy una funcion Anonima');
};

// Arrow functions -- No puedo acceder al this
const myArrowFunction = () => {
  console.log('Hola soy una funcion flecha');
};

// Condisionales -- Conditionals

const adultAge = 18;
let myAge = 20;

if (myAge >= adultAge) {
  // console.log('Es mayor de edad')
} else {
  // console.log('Es menor de edad')
}

let ageOne = 21;
let ageTwo = 20;

function comparar() {
  if (ageOne === ageTwo && ageOne > adultAge) {
    console.log('Tienen la misma edad y son mayores de edad');
  } else if (ageTwo === myAge) {
    console.log('ageTwo y myAge son iguales');
  } else {
    console.log('No tienen la misma edad');
  }
}

// comparar();

// Ciclos -- Cycles

function ciclo() {
  let suma = 0;

  for (i = 0; i < 10; i++) {
    suma = suma + 10;
  }
}

const resultado = ciclo();

// console.log(resultado);

// Objetos y arreglos

const arrayString = ['cristian', 'Jose', 'Cesar'];
const arrayNumber = [12, 23, 45, 67, 90];

// Creacion de Objeto
const carro = {
  // Atributos
  llantas: 4,
  color: 'Plateado',
  puertas: 3,
  marca: 'Ford',
  paraVender: true,
  motor: {
    cilindros: 16,
    serie: 'ADB123455',
    funciona: true
  },
  // Metodos
  encender: function () {
    return 'Estoy encendido';
  },

  apagar() {
    return 'Me apagué';
  }
};

carro.placa = 'ABC123';
carro.owner = 'Cristian';
carro.numeroDeFactura = 1001;

carro.aumentarFactura = function () {
  let suma = (carro.numeroDeFactura += 1);
  return suma;
};

carro.aumentarFactura();

const datosRandom = [
  'cristian',
  26,
  true,
  'email@email.com',
  { llantas: 4, motor: 'v8' },
  [12, 34, 65]
];

const listaAlumnos = ['Saul', 'Cesar', 'Santiago', 'Moha', 'Jose'];
const notas = [2, 6, 7.5, 8, 0];

listaAlumnos[3] = 'Saul';
listaAlumnos[0] = 'Mohacyr';

// listaAlumnos.length;
// listaAlumnos.sort()
listaAlumnos.push('Manuel');
listaAlumnos.push('Pepito');
listaAlumnos.push('John');
// listaAlumnos.pop();

// console.log(listaAlumnos)

// Recorrer un arreglo
function getNames() {
  for (i = 0; i < listaAlumnos.length; i++) {
    console.log(`Hola ${listaAlumnos[i]}`);
  }
}

getNames();
