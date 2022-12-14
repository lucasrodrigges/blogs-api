const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

// routes
app.use('/login', routes.loginRoute);
app.use('/user', routes.userRoute);
app.use('/categories', routes.categoryRoute);
app.use('/post', routes.postRoute);

module.exports = app;
