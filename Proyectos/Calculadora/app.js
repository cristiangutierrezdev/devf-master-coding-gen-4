// Variables
const display = document.getElementById('calculator__display');
// Numbers
const one = document.getElementById('calculator__one');
const two = document.getElementById('calculator__two');
const three = document.getElementById('calculator__three');
const four = document.getElementById('calculator__four');
const five = document.getElementById('calculator__five');
const six = document.getElementById('calculator__six');
const seven = document.getElementById('calculator__seven');
const eight = document.getElementById('calculator__eight');
const nine = document.getElementById('calculator__nine');
const cero = document.getElementById('calculator__cero');
const dot = document.getElementById('calculator__dot');
// Operators
const multiplyBtn = document.getElementById('calculator__multiply');
const divideBtn = document.getElementById('calculator__divide');
const minusBtn = document.getElementById('calculator__minus');
const plusBtn = document.getElementById('calculator__plus');
const resultBtn = document.getElementById('calculator__result');
const partialDeleteBtn = document.getElementById('calculator__partial-delete');
const deleteBtn = document.getElementById('calculator__delete');
// Varibales clave
let firstNumber;
let secondNumber;
let operator;

// Funcion para mostrar los numero en pantalla
function getNumber(e) {
  const number = e.target.innerText;
  const previousNumber = display.innerText;

  if (previousNumber === '0') {
    display.innerText = number;
  } else {
    display.innerText = previousNumber + number;
  }
}

// Funciones operativas
function multiply() {
  firstNumber = display.innerText;
  display.innerText = '0';
  operator = 'multiply';
}
function divide() {
  firstNumber = display.innerText;
  display.innerText = '0';
  operator = 'divide';
}
function minus() {
  firstNumber = display.innerText;
  display.innerText = '0';
  operator = 'minus';
}
function plus() {
  firstNumber = display.innerText;
  display.innerText = '0';
  operator = 'plus';
}

function result() {
  let resultNumber;
  secondNumber = display.innerText;

  if (operator === 'multiply') {
    resultNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (operator === 'divide') {
    resultNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
  } else if (operator === 'minus') {
    resultNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else {
    resultNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
  }

  display.innerText = resultNumber;
}

function reset() {
  display.innerText = '0';
  firstNumber = 0;
  secondNumber = 0;
  operator = '';
}

function partialReset() {
  display.innerText = '0';
}

//  Agregamos los eventos a cada boton (numeros)
one.addEventListener('click', getNumber);
two.addEventListener('click', getNumber);
three.addEventListener('click', getNumber);
four.addEventListener('click', getNumber);
five.addEventListener('click', getNumber);
six.addEventListener('click', getNumber);
seven.addEventListener('click', getNumber);
eight.addEventListener('click', getNumber);
nine.addEventListener('click', getNumber);
cero.addEventListener('click', getNumber);
dot.addEventListener('click', getNumber);
// Operadores
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
minusBtn.addEventListener('click', minus);
plusBtn.addEventListener('click', plus);
resultBtn.addEventListener('click', result);
deleteBtn.addEventListener('click', reset)
partialDeleteBtn.addEventListener('click', partialReset)
