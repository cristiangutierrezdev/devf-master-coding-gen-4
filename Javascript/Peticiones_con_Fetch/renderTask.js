const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');
const createButton = document.querySelector('#create-buttton');
const wrapper = document.querySelector('#task-wrapper');
const buttonText = document.querySelector('#button-text');
const buttonLoadingIcon = document.querySelector('#button-loading-icon');
const buttonLoadingText = document.querySelector('#button-loading-text');

function createTaskEvent() {
  createButton.disabled = true;
  buttonText.classList.add('d-none');
  buttonLoadingIcon.classList.remove('d-none');
  buttonLoadingIcon.classList.add('d-inline-block');
  buttonLoadingText.classList.remove('d-none');
  buttonLoadingText.classList.add('d-inline-block');

  const data = {
    titulo: titleInput.value,
    descripcion: descriptionInput.value,
  };

  createTask(data)
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      titleInput.value = '';
      descriptionInput.value = '';

      return getAllTasks();
    })
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      createButton.disabled = false;
      buttonText.classList.remove('d-none');
      buttonText.classList.add('d-inline-block');
      buttonLoadingIcon.classList.remove('d-inline-block');
      buttonLoadingIcon.classList.add('d-none');
      buttonLoadingText.classList.remove('d-inline-block');
      buttonLoadingText.classList.add('d-none');
      renderTasks(result);
      addEvents();
    })
    .catch((err) => {
      console.log(err);
    });
}

createButton.addEventListener('click', createTaskEvent);

function renderTasks(tasks) {
  tasks.reverse();
  wrapper.innerHTML = '';
  tasks.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('my-3');
    div.id = element._id;

    const template = `
    <h5 class="card-header">Tarea</h5>
    <div class="card-body">
      <h5 class="card-title">${element.titulo}</h5>
      <p class="card-text">${element.descripcion}</p>
      <button type="button" id='create-buttton' class="btn btn-dark task-btn">
        Terminar tarea
    </button>
    </div>`;

    div.innerHTML = template;
    wrapper.append(div);
  });
}

function addEvents() {
  const allTaskButtons = document.querySelectorAll('.task-btn');
  console.log(allTaskButtons);
  allTaskButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      deleteEvent(e);
    });
  });
}

function deleteEvent(e) {
  const parent = e.target.parentNode.parentNode;

  deleteTask(parent.id)
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      return getAllTasks();
    })
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      renderTasks(result);
      addEvents();
    })
    .catch((err) => {
      console.log(err);
    });
}

getAllTasks()
  .then((result) => {
    return result.json();
  })
  .then((result) => {
    renderTasks(result);
    addEvents();
  })
  .catch((err) => {
    console.log(err);
  });
