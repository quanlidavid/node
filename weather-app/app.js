const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
	console.log('Please enter a place!');
} else {
	geocode(address, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return console.log(error);
		}
		forecast(latitude, longitude, (error, { cast, temperature, feel }) => {
			if (error) {
				return console.log(error);
			}
			console.log(location);
			console.log(
				cast + '. It is currently ' + temperature + ' degree out. It feels like ' + feel + ' degrees out.'
			);
		});
	});
}
