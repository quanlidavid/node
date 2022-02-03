const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true
});

const User = mongoose.model('User', {
	name: {
		type: String
	},
	age: {
		type: Number
	}
});

/* const me = new User({
	name: 'Quan',
	age: 36
});

me
	.save()
	.then(() => {
		console.log(me);
	})
	.catch((error) => {
		console.log('Error!', error);
	}); */

const Task = mongoose.model('Task', {
	description: {
		type: String
	},
	completed: {
		type: Boolean
	}
});

const fixTuba = new Task({
	description: 'Fix the tuba',
	completed: false
});

fixTuba
	.save()
	.then(() => {
		console.log(fixTuba);
	})
	.catch((error) => {
		console.log('Error!', error);
	});
