console.log('Client side javascript file is loaded!');

/* fetch('http://puzzle.mead.io/puzzle').then((response) => {
	response.json().then((data) => {
		console.log(data);
	});
});

fetch('http://localhost:3000/weather?address=changping').then((response) => {
	response.json().then((data) => {
		if (data.error) {
			return console.log(data.error);
		}
		console.log(
			data.cast +
				'. It is currently ' +
				data.temperature +
				' degree out. It feels like ' +
				data.feel +
				' degrees out.'
		);
	});
}); */

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const location = search.value;
	console.log('input location:' + location);
	fetch('http://localhost:3000/weather?address=' + location).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				return console.log(data.error);
			}
			console.log(
				data.cast +
					'. It is currently ' +
					data.temperature +
					' degree out. It feels like ' +
					data.feel +
					' degrees out.'
			);
		});
	});
});
