const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const Filter = require('bad-words');
const { generateMessage } = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

io.on('connection', (socket) => {
	console.log('New websocket connection');
	socket.emit('message', generateMessage('Welcome!'));
	socket.broadcast.emit('message', generateMessage('Userxxx has joined, welcome!'));
	socket.on('sendMessage', (message, callback) => {
		const filter = new Filter();
		if (filter.isProfane(message)) {
			return callback('Profanity is not allowed!');
		}
		io.emit('message', generateMessage(message));
		callback();
	});
	socket.on('sendLocation', (coords, callback) => {
		io.emit('locationMessage', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`);
		callback();
	});
	socket.on('disconnect', () => {
		io.emit('message', generateMessage('User xxx has left, bye bye!'));
	});
});

server.listen(port, () => {
	console.log(`listening on port ${port}`);
});
