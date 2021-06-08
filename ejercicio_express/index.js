const express = require('express');
const router = require('./routes');
const app = express();
const port = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/v1', router);

app.listen(port, () => {
	console.log(`Server on http://localhost:${port}`);
});
