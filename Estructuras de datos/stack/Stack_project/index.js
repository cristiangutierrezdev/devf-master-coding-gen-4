const button_add = document.querySelector('#btn-add-item');
const list_item = document.querySelector('#list-item');
const list_wrapper = document.querySelector('#list-wrapper');

let principalArray = [];

class Item {
  constructor(tituloCorreo, id) {
    this.tituloCorreo = tituloCorreo;
    this.id = id;
  }
}

button_add.addEventListener('click', createEmail);

function createEmail() {
  const ramdomNumber = Math.random();
  const title = `Correo ` + ramdomNumber;
  const newItem = new Item(title, ramdomNumber);
  principalArray.push(newItem);
  renderItems();
}

// FUNCION PARA VER EL EJEMPLO DE PILA
function renderItems() {
  list_wrapper.innerHTML = '';

  const revertContent = [];
  const copyPrincipalArray = [...principalArray]; // Inmutabilidad - spread operator

  for (let index = 0; index < principalArray.length; index++) {
    const item = copyPrincipalArray.pop();
    revertContent.push(item);
  }

  for (let index = 0; index < revertContent.length; index++) {
    const liItem = document.createElement('li'); // <li></li>
    liItem.classList.add('list-item'); // <li classe='list-item'></li>
    liItem.textContent = revertContent[index].tituloCorreo; // <li classe='list-item'>Correo 2</li>
    liItem.id = revertContent[index].id; // <li classe='list-item'>Correo 2</li>

    const button = document.createElement('button');
    button.classList.add('btn-read');
    button.textContent = 'Marcar como leido';
    liItem.appendChild(button);

    list_wrapper.appendChild(liItem);
  }

  addEventToButtons();
}

// FUNCION PARA VER EL EJEMPLO DE COLA
// function renderItems() {
//   list_wrapper.innerHTML = '';

//   for (let index = 0; index < principalArray.length; index++) {
//     const liItem = document.createElement('li'); // <li></li>
//     liItem.classList.add('list-item'); // <li classe='list-item'></li>
//     liItem.textContent = principalArray[index].tituloCorreo; // <li classe='list-item'>Correo 2</li>
//     liItem.id = principalArray[index].id; // <li classe='list-item'>Correo 2</li>

//     const button = document.createElement('button');
//     button.classList.add('btn-read');
//     button.textContent = 'Marcar como leido';
//     liItem.appendChild(button);

//     list_wrapper.appendChild(liItem);
//   }

//   addEventToButtons();
// }

function addEventToButtons() {
  const buttons_read = document.querySelectorAll('.btn-read'); // [<button class='btn-read'></button>, <button class='btn-read'></button>, <button class='btn-read'></button>]

  buttons_read.forEach(function (btn) {
    btn.addEventListener('click', deleteItem);
  });
}

function deleteItem(event) {
  const buttonsParent = event.target.parentNode; // <li id='12312'></li>

  const newArray = principalArray.filter((item) => {  // [item, item, item ]
    return item.id != buttonsParent.id;  // false
  });

  principalArray = newArray;

  renderItems();
}
