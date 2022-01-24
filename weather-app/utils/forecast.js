const request = require('postman-request');
const forecast = (latitude, longitude, callback) => {
	const url =
		'http://api.weatherstack.com/current?units=m&access_key=25f925de5002522d2a6b6bd1810ddf6d&query=' +
		encodeURIComponent(latitude) +
		',' +
		encodeURIComponent(longitude);
	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to weather service', undefined);
		} else if (response.body.error) {
			callback('Unable to find location', undefined);
		} else {
			const data = {
				cast: response.body.current.weather_descriptions[0],
				temperature: response.body.current.temperature,
				feel: response.body.current.feelslike
			};
			callback(undefined, data);
		}
	});
};

module.exports = forecast;
