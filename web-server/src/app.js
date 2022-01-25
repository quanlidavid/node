const express = require('express');

const app = express();

app.get('', (req, res) => {
	res.send('<h1>Hello express!</h1>');
});

app.get('/help', (req, res) => {
	res.send([
		{
			name: 'jack',
			age: 10
		},
		{
			name: 'jack',
			age: 10
		}
	]);
});

app.get('/about', (req, res) => {
	res.send('<html><head><title>About</title></head></html>');
});

app.get('/weather', (req, res) => {
	res.send({
        temperature:34,
        location:'changping'
    });
});

app.listen(3000, () => {
	console.log('Server is up on 3000.');
});
