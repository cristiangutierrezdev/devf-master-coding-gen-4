const express = require('express'); // Requerimos express
const app = express();
const router = require('./routes');

// Middlewares
app.use(express.urlencoded({ extended: false })); // es extended true cuando queremos recibir archivos como por ej imagenes false cuando sabemos que no los vamos a recibir
app.use(express.json()); // Le decimos a express que vamos a trabajar con tipos de datos json

app.use('/api/v1', router);

app.listen(4000, function () {
  console.log('Server on');
});
