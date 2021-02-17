const axios = require('axios');

const baseUrl = 'https://goodreads-devf-aaron.herokuapp.com';

// Peticion de tipo GET por lo tanto es para pedir datos

function getUsers() {
  return axios.get(`${baseUrl}/api/v1/authors/`);
}

// getUsers()
//   .then((datos) => {
//     console.log(datos.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Peticion de tipo POST que es para enviar datos

const info = {
  name: 'Cristian 2',
  last_name: 'Gutierrez',
  nacionalidad: 'MX',
  biography: 'Hola Soy Cristian 2 probando desde el codigo',
  gender: 'M',
  age: 26,
};

function createUser(userData) {
  return axios.post(`${baseUrl}/api/v1/authors/`, userData);
}

// createUser(info)
//   .then((result) => {
//     console.log(result.data);
//   })
//   .catch((err) => {
//     console.log(err.response.data)
//   });

// Peticion de tipo GET para pedir tados de un usuario

function getUser(id) {
  return axios.get(`${baseUrl}/api/v1/authors/${id}/`);
}

// getUser(13635)
//   .then((result) => {
//     console.log(result.data)
//   })
//   .catch((err) => {
//     console.log(err.response.data)
//   });

// Peticion de tipo PUT para modificar los datos de un usuario

function modifyUser(id, newUserData) {
  return axios.put(`${baseUrl}/api/v1/authors/${id}/`, newUserData);
}

const newInfo = {
  name: 'Cristian',
  last_name: 'Gutierrez',
  nacionalidad: 'MX',
  biography: 'Probando el PUT',
  gender: 'M',
  age: 26,
};

// modifyUser(13635, newInfo)
//   .then((result) => {
//     console.log(result.data);
//   })
//   .catch((err) => {
//     console.log(err.response.data)
//   });

// Peticion de tipo PATCH para modificar parcialmente un usuario

function modifyAge(id, newAge) {
  return axios.patch(`${baseUrl}/api/v1/authors/${id}/`, { age: newAge });
}

// modifyAge(13635, 26)
//   .then((result) => {
//     console.log(result.data)
//   })
//   .catch((err) => {
//     console.log(err.response.data)
//   });

// Peticion de tipo DELETE para eliminar un usuario

function deleteUser(id) {
  return axios.delete(`${baseUrl}/api/v1/authors/${id}/`);
}

// deleteUser(13635)
//   .then((result) => {
//     console.log(result.data);
//   })
//   .catch((err) => {
//     console.log(err.response.data)
//   });

const info2 = {
  name: 'Pepito',
  last_name: 'Perez',
  nacionalidad: 'MX',
  biography: 'Probando la anidacion de peticiones',
  gender: 'M',
  age: 28,
};

// createUser(info2)
//   .then((result) => {
//     console.log('CREADO---->', result.data)
//     const user = result.data;

//     user.name = 'Nico';
//     user.last_name = 'Rodriguez';

//     return modifyUser(user.id, user);
//   })
//   .then((result) => {
//     console.log('MODIFICADO---->', result.data)
//     const user = result.data;

//     return modifyAge(user.id, 20);
//   })
//   .then((result) => {
//     console.log('EDAD MODIFICADA---->', result.data)
//     const user = result.data;

//     return deleteUser(user.id)
//   })
//   .then((result)=>{
//     console.log('USUARIO ELIMINADO--->',result.data)
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const book = {
  title: 'mi libro',
  isbn: 12132,
  prologue: 'Cualquier prologo',
  author: 13655,
  date_published: '2021-02-15'
}

axios
  .post(`${baseUrl}/api/v1/books/`, book)
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err.response.data);
  });
