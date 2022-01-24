const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
	console.log('Please enter a place!');
} else {
	geocode(place, (error, data) => {
		if (error) {
			return console.log(error);
		}
		forecast(data.latitude, data.longitude, (error, forecastdata) => {
			if (error) {
				return console.log(error);
			}
			console.log(data.location);
			console.log(
				forecastdata.cast +
					'. It is currently ' +
					forecastdata.temperature +
					' degree out. It feels like ' +
					forecastdata.feel +
					' degrees out.'
			);
		});
	});
}
