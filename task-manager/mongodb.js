// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString());
console.log(id.toHexString().length);
console.log(id.getTimestamp());

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
});
