const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const Filter = require('bad-words');
const { generateMessage, generateLocationMessage } = require('./utils/messages');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

//socket.emit  发给特定的客户端
//io.emit  发给所有连接的客户端
//socket.broadcast.emit  发给除了当前客户端的所有客户端
//io.to.emit  给房间里的所有客户端发
//socket.broadcast.to.emit  发给房间里除了当前客户端的所有客户端
io.on('connection', (socket) => {
	console.log('New websocket connection');
	socket.on('join', ({ username, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, username, room });
		if (error) {
			return callback(error); //return 代替 if else
		}
		socket.join(user.room);
		socket.emit('message', generateMessage(`${user.username}， Welcome to the room!`));
		socket.broadcast
			.to(user.room)
			.emit('message', generateMessage(`${user.username} has joined room.`));
		callback();
	});
	socket.on('sendMessage', (message, callback) => {
		const filter = new Filter();
		if (filter.isProfane(message)) {
			return callback('Profanity is not allowed!');
		}
		io.emit('message', generateMessage(message));
		callback();
	});
	socket.on('sendLocation', (coords, callback) => {
		io.emit(
			'locationMessage',
			generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
		);
		callback();
	});
	socket.on('disconnect', () => {
		const user = removeUser(socket.id);
		if (user) {
			io.to(user.room).emit('message', generateMessage(`${user.username} has left!`));
		}
	});
});

server.listen(port, () => {
	console.log(`listening on port ${port}`);
});
