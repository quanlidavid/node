// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!');
	}

	const db = client.db(databaseName);

	/* 	db.collection('users').insertOne({
		name: 'David',
		age: 36
	}, (error, result) => {
		if (error) {
			return console.log('Unable to insert user');
		}

		console.log(result);
	}); */

	/* 	db.collection('users').insertOne({
		_id: id,
		name: 'Jack',
		age: 36
	}, (error, result) => {
		if (error) {
			return console.log('Unable to insert user');
		}

		console.log(result);
	}); */

	/* 	db.collection('users').insertMany([ { name: 'Jen', age: 28 }, { name: 'God', age: 88 } ], (error, result) => {
		if (error) {
			return console.log('Unable to insert users');
		}
		console.log(result);
	}); */

	/* 	db.collection('tasks').insertMany([
		{
			description: 'eat lunch',
			completed: true
		},
		{
			description: 'watch movie',
			completed: false
		}
	], (error, result) => {
		if (error) {
			return console.log('Unable to insert tasks');
		}
		console.log(result);
	}); */

	/* 	db.collection('users').findOne({ _id: new ObjectID('61fb8e855c502eb884366b6c') }, (error, user) => {
		if (error) {
			return console.log('Unable to fetch');
		}

		console.log(user);
	});

	db.collection('users').find({ age: 36 }).toArray((error, users) => {
		console.log(users);
	});

	db.collection('users').find({ age: 36 }).count((error, count) => {
		console.log(count);
	}); */

	/* 	db.collection('tasks').findOne({ _id: new ObjectID('61fb933e24978859d977ff51') }, (error, task) => {
		if (error) {
			return console.log('Unable to fetch');
		}
		console.log(task);
	});

	db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
		if (error) {
			return console.log('Unable to fetch');
		}
		console.log(tasks);
	}); */

	db
		.collection('users')
		.updateOne(
			{
				name: 'Bob'
			},
			{
				// $set: {
				// 	name: 'Bob'
				// }
				$inc: {
					age: 12
				}
			}
		)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});

	db
		.collection('tasks')
		.updateMany(
			{
				completed: false
			},
			{
				$set: {
					completed: true
				}
			}
		)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
});
