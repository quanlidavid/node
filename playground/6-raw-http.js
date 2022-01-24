const http = require('http');
const url = 'http://api.weatherstack.com/current?units=m&access_key=25f925de5002522d2a6b6bd1810ddf6d&query=40,-75';

const request = http.request(url, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		data = data + chunk.toString();
	});
	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on('error', (error) => {
	console.log('An error', error);
});

request.end();
