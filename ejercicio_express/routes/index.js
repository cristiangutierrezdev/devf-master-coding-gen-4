const express = require('express');
const { User } = require('../models/');
const router = express.Router();

//CLASE
//Registrar Usuario:
router.post('/register', async (req, res) => {
	const newUser = new User(req.body);
	try {
		const user = await newUser.save();
		res.status(201).send(user);
		console.log('New User created');
	} catch (error) {
		res.status(409).send('Error:', error);
	}
});

//Listar todos los usuarios:
router.get('/users', async (_, res) => {
	try {
		const users = await User.find();
		res.status(200).send(users);
		console.log('Users List');
		console.log(users);
	} catch (error) {
		res.status(409).send('Error:', error);
	}
});

//Buscar usuario por su id:
router.get('/users/:userid', async (req, res) => {
	const paramId = req.params.userid;
	try {
		const user = await User.findById(paramId);
		res.status(200).send(user);
		console.log('User Found');
		console.log(user);
	} catch (error) {
		res.status(404).send('Error:', error);
	}
});

//Modificar usuario:
router.put('/users/:userid', async (req, res) => {
	const paramId = req.params.userid;
	const newData = req.body;

	try {
		const updatedUser = await User.findByIdAndUpdate(
			paramId,
			newData,
			{ new: true },
		);
		res.status(200).send(updatedUser);
		console.log('User Updated');
		console.log(updatedUser);
	} catch (error) {
		res.status(404).send('Error:', error);
	}
});

//Modificar el email del usuario:
router.patch('/users/:userid', async (req, res) => {
	const paramId = req.params.userid;
	const newEmail = req.body.email;

	try {
		const updatedUser = await User.findByIdAndUpdate(
			paramId,
			{ $set: { email: newEmail } },
			{ new: true },
		);
		res.status(200).send(updatedUser);
		console.log('User Updated');
		console.log(updatedUser);
	} catch (error) {
		res.status(404).send('Error:', error);
	}
});

//Eliminar usuario:
router.delete('/users/:userid', async (req, res) => {
	const paramId = req.params.userid;

	try {
		await User.findByIdAndDelete(paramId, {});
		console.log('User Deleted');
		res.status(200).send({ message: 'User was deleted' });
	} catch (error) {
		res.status(404).send(error);
	}
});

//EJERCICIOS
router.post('/suma', (req, res) => {
	console.log('-------------');
	console.log('Ejercicio 1: ');
	console.log(req.body);

	const num1 = parseInt(req.body.num1);
	const num2 = parseInt(req.body.num2);
	const sum = num1 + num2;
	res.send(`La suma entre ${num1} y ${num2} es ${sum}`);
});

router.get('/usuario/:nombre', (req, res) => {
	console.log('-------------');
	console.log('Ejercicio 2: ');

	const paramNombre = req.params.nombre;
	console.log(paramNombre);

	const usuario = { usuario: paramNombre };
	res.status(200).send(usuario);
});

router.delete('/usuario/:id', (req, res) => {
	console.log('-------------');
	console.log('Ejercicio 3: ');

	const paramId = req.params.id;
	console.log(paramId);
	const existId = paramId === '3' ? true : false;
	if (existId)
		res.status(200).send('Se ha eliminado el objeto con ID 3');
	else
		res
			.status(404)
			.send('No se encontró el objeto con el ID especificado');
});

module.exports = router;
