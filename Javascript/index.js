const title = document.getElementById('title');
const input = document.getElementById('input-text');
const btn = document.getElementById('btn');

function getText() {
  let inputValue = input.value;
  title.innerText = inputValue;
}

function getTextWithKey(event) {
  if (event.code === 'Enter') {
    let inputValue = input.value;
    title.innerText = inputValue;
  }
}

btn.addEventListener('click', getText);

input.addEventListener('keypress', getTextWithKey);

// PROBANDO EL SWITCH CASE

const operation = 'X';
let calculo = 0;

function comparar() {

  switch (operation) {
    case '+':
      calculo = anterior + actual;
      break;
    case '-':
      calculo = anterior - actual;
      break;
    case 'X':
      calculo = anterior * actual;
      break;
    case '/':
      calculo = anterior / actual;
      break;
    default:
      return;
  }
}
