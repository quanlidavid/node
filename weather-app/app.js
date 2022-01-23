const request = require('postman-request');

const url =
	'http://api.weatherstack.com/current?units=m&access_key=25f925de5002522d2a6b6bd1810ddf6d&query=120.245.128.163';
// 'http://api.weatherstack.com/current?units=m&access_key=25f925de5002522d2a6b6bd1810ddf6d&query=';

request({ url: url, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to weather service');
	} else if (response.body.error) {
		console.log('Unable to find location');
	} else {
		const cast = response.body.current.weather_descriptions[0];
		const temperature = response.body.current.temperature;
		const feel = response.body.current.feelslike;
		console.log(cast + '. It is currently ' + temperature + ' degree out. It feels like ' + feel + ' degrees out.');
	}
});

const geocodeURL =
	// 'https://api.mapbox.com/geocoding/v5/mapbox.places/12wqe.json?access_token=pk.eyJ1IjoicXVhbmxpZGF2aWQiLCJhIjoiY2t5cjFjdXh4MGZ2YjJxczI1Y2Nsd3NuYSJ9.noEgWIpJ6DstI8QbM7n9iA&country=cn&language=zh-cn&limit=1';
	'https://api.mapbox.com/geocoding/v5/mapbox.places/changping.json?access_token=pk.eyJ1IjoicXVhbmxpZGF2aWQiLCJhIjoiY2t5cjFjdXh4MGZ2YjJxczI1Y2Nsd3NuYSJ9.noEgWIpJ6DstI8QbM7n9iA&country=cn&language=zh-cn&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
	if (error) {
		console.log('Unable to connect to location service');
	} else if (response.body.features.length === 0) {
		console.log('Unable to find place.');
	} else {
		const latitude = response.body.features[0].center[1];
		const longitude = response.body.features[0].center[0];
		console.log(latitude, longitude);
	}
});