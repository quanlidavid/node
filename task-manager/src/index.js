const express = require('express');
require('./db/mongoose'); //will run mongoose.js to connecting database
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {	//middleware function
// 	if (req.method === 'GET') {
// 		res.send('Get requests are disabled')
// 	}else{
// 		next();
// 	}
// });
// app.use((req, res, next) => {
// 	res.status(503).send('The site is on maintenance. please come back later.');
// });

app.use(express.json()); //parses incoming requests with JSON payloads
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});
