const socket = io();

socket.on('message', (msg) => {
	console.log(msg);
});

document.querySelector('#message-form').addEventListener('submit', (event) => {
	event.preventDefault(); //防止页面刷新
	// debugger;
	const message = event.target.elements.message.value;
	socket.emit('sendMessage', message);
});

document.querySelector('#send-location').addEventListener('click', () => {
	if (!navigator.geolocation) {
		return alert('Geolocation is not supported by your browser.');
	}

	navigator.geolocation.getCurrentPosition((position) => {
		socket.emit('sendLocation', { latitude: position.coords.latitude, longitude: position.coords.longitude });
	});
});
