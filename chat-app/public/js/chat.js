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
