const path = require('path');
const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'David'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Me',
		name: 'David'
	});
});

app.get('/help', (req, res) => {
    res.render('help',{
        helpText: 'Help me'
    })
});

app.get('/weather', (req, res) => {
	res.send({
		temperature: 34,
		location: 'changping'
	});
});

app.listen(3000, () => {
	console.log('Server is up on 3000.');
});
