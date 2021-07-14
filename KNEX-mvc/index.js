const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3600;

// Middlewares para parsear el body de una petición
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Bienvenido 💻' }));

app.use('/api/v1', require('./routers/AnimalRouter'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));