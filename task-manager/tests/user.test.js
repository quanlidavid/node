const request = require('supertest');
const app = require('../src/app');

test('Should signup a new user', async () => {
	await request(app)
		.post('/users')
		.send({
			name: 'David-2-12-001',
			email: 'davidsuger@163.com',
			password: '123qaz888'
		})
		.expect(201);
});
