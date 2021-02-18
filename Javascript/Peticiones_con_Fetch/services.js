const baseUrl = 'https://mysterious-plateau-36285.herokuapp.com';

function createTask(data) {
  const config = {
    method: 'POST',
    body: JSON.stringify(data), // Convierte el objeto en texto plano
    headers: {
      'Content-Type': 'application/json' // Le decimos al backend (API) que tipo de datos estamos enviando, en este caso un dato JSON
    },
  };

  return fetch(`${baseUrl}/api/v1/crear/tarea`, config);
}

function getAllTasks() {
  return fetch(`${baseUrl}/api/v1/obtener/todas/tareas`);
}

function getTask(id) {
  return fetch(`${baseUrl}/api/v1/obtener/tarea/${id}`);
}

function updateTask(id, data) {
  const config = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  return fetch(`${baseUrl}/api/v1/modificar/tarea/${id}`, config);
}

function deleteTask(id) {
  const config = {
    method: 'DELETE',
  };
  return fetch(`${baseUrl}/api/v1/borrar/tarea/${id}`, config);
}

