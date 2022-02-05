const express = require('express');
require('./db/mongoose'); //will run mongoose.js to connecting database
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //parses incoming requests with JSON payloads
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
// 	const token = jwt.sign({ _id: 'abc123' }, 'thisismynewtoken', { expiresIn: '0 seconds' });
// 	console.log(token);

// 	const data = jwt.verify(token, 'thisismynewtoken');
// 	console.log(data);
// };

// myFunction();
