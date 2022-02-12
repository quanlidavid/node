const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
	name: 'John',
	email: 'john@example.com',
	password: '12345qwert'
};
beforeEach(async () => {
	await User.deleteMany();
	await new User(userOne).save();
});

// test('Should signup a new user', async () => {
// 	await request(app)
// 		.post('/users')
// 		.send({
// 			name: 'David-2-12-001',
// 			email: 'davidsuger@163.com',
// 			password: '123qaz888'
// 		})
// 		.expect(201);
// });

test('Should login existing user', async () => {
	await request(app)
		.post('/users/login')
		.send({
			email: userOne.email,
			password: userOne.password
		})
		.expect(200);
});

test('Should not login nonexisting user', async () => {
	await request(app)
		.post('/users/login')
		.send({
			email: userOne.email,
			password: 'badPassword'
		})
		.expect(400);
});
