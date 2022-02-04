require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');

User.findByIdAndUpdate('61fbfbd30d527c0ef783bd90', { age: 1 })
	.then((user) => {
		console.log(user);
		return User.countDocuments({ age: 1 });
	})
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});

Task.findByIdAndDelete({ _id: '61fcec070e366aa8c3af7810' })
	.then((result) => {
		console.log(result);
		return Task.countDocuments({ completed: false });
	})
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});
