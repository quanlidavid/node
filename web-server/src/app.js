const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
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
	res.render('help', {
		helpText: 'Help me',
		title: 'Help',
		name: 'David'
	});
});

app.get('/weather', (req, res) => {
	res.send({
		temperature: 34,
		location: 'changping'
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		errorMessage: 'Help article not found'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		errorMessage: 'Page not found'
	});
});

app.listen(3000, () => {
	console.log('Server is up on 3000.');
});
