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

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age });
	const count = await User.countDocuments({ age });
	return count;
};

updateAgeAndCount('61fbf60855dfefa3bd33a627', 36)
	.then((count) => {
		console.log('count: ', count);
	})
	.catch((err) => {
		console.log(err);
	});

const deleteTaskAndCount = async (id) => {
	const result = await Task.findByIdAndDelete(id);
	const count = await Task.countDocuments({ completed: false });
	return count;
};

deleteTaskAndCount('61fc02570d98c09239ac1969')
	.then((count) => {
		console.log('task count: ', count);
	})
	.catch((err) => {
		console.log(err);
	});
