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

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
	// const task = await Task.findById('61ff315c4d15224b2907612d');
	// await task.populate('owner');
	// console.log(task.owner);

	const user = await User.findById('61ff2f1a31b744e04c05e624')
	await user.populate('tasks')
	console.log(user.tasks)
};

main();
