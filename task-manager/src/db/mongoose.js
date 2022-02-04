const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true
});

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
		trim: true,
		validate(value) {
			if (value.toLowerCase().includes('password')) {
				throw new Error("Password cannot contain 'password'");
			}
		}
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		}
	}
});

// const me = new User({
// 	name: '  tom ',
// 	password: ' passw1eqeqr  ',
// 	email: ' TOM@163.com  '
// });

// me
// 	.save()
// 	.then(() => {
// 		console.log(me);
// 	})
// 	.catch((error) => {
// 		console.log('Error!', error);
// 	});

const Task = mongoose.model('Task', {
	description: {
		type: String,
        trim: true,
        required: true,
	},
	completed: {
		type: Boolean,
        default: false,
	}
});

const fixTuba = new Task({
	description: ' Fix the tuba  ',
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
