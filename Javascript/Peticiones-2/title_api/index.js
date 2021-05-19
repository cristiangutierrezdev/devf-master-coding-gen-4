//1.- Escribe una función que reciba como parámetros titulo y
//        descripcion para hacer una
//        petición a la API para crear una nueva tarea. 
//        La función debe retornar la tarea nueva en una promesa. 
//2.- Escribe una función que reciba como parámetro un ID
//        para realizar una petición a la API para hallar una 
//        tarea con el ID especificado. La función debe retornar
//       una promesa con la respuesta del servidor.
//3.- Escribe una función que reciba como parametro tareaHecha para hacer una 
//        petición a la API para modificar una tarea existente y cambiar su
//        valor de terminado a al estado true.
//        Al ejecutar La función, esta debe retornar la tarea 
//        modificada en una promesa.
//4.- Escribe una función que reciba como parámetro un ID
//        para realizar una petición a la API para eliminar una
//        tarea con el ID especificado. La función debe retornar
//       una promesa con la respuesta del servidor.
//los datos que debes enviar para crear una tarea son:
//    titulo: {
//     type: String,
//      required: true
//    },
//    descripcion: {
//      type: String
//    },

//CREAR una Tarea ----->   Metodo POST  path /api/v1/crear/tarea
//OBTENER TODAS las Tareas ----->   Metodo GET  path /api/v1/obtener/todas/tareas
//OBTENER UNA Tarea ----->   Metodo GET  path /api/v1/obtener/tarea/{id}
//MODIFICAR UNA Tarea ------> Metodo: PUT  path /api/v1/modificar/tarea/{id}
//ELIMINAR UNA Tarea ------> Metodo: DELETE  path /api/v1/borrar/tarea/{id}

const axios=require('axios');

const URL="https://mysterious-plateau-36285.herokuapp.com";

const info = {
  titulo: "Juan 2",
  Description: "nuevo titulo",
};

function createUser(userData) {
  return axios.post(`${URL}/api/v1/crear/tarea`, userData);
}

createUser(info)
    .then((result)=>{
        console.log(result.data);
    })
    .catch((err)=>{
        console.log(err.response.data)
    });

function getUsers() {
    return axios.get(`${URL}/api/v1/obtener/todas/tareas`);
}

getUsers()  
    .then((datos) => {
     console.log(datos.data);
   })
   .catch((error) => {
     console.log(error);
   });

function getUsers(id) {
    return axios.get(`${URL}/api/v1/obtener/tarea/${id}/`);
}

getUsers("60a4fa92d23829001750a297")
  .then((datos) => {
    console.log(datos.data);
  })
  .catch((error) => {
    console.log(error);
  });

function modifyTitulo (id, newTask){
    return axios.put(`${URL}/api/v1/modificar/tarea/${id}/`, {titulo: newTask});
}

modifyTitulo("60a4fa92d23829001750a297", "Juan 2 modified")
  .then((datos) => {
    console.log(datos.data);
  })
  .catch((error) => {
    console.log(error);
  });

function deleteUser(id) {
    return axios.delete(`${URL}/api/v1/borrar/tarea/${id}/`);
  }

  deleteUser ("60a4fa92d23829001750a297")
    .then((datos) => {
      console.log(datos.data);
    })
    .catch((error) => {
    console.log(error);
    });