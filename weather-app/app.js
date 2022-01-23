const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
geocode('changping', (error, data) => {
	console.log('Error: ', error);
	console.log(data);
});

forecast(40.21965, 116.2255, (error, data) => {
	console.log('Error: ', error);
	console.log(data);
});
