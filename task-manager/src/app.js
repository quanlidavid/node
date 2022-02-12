const express = require('express');
require('./db/mongoose'); //will run mongoose.js to connecting database
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

app.use(express.json()); //parses incoming requests with JSON payloads
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
