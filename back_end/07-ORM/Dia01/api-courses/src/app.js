const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const routes = require('../src/routes/routes')

const app = express();

app.use(express.json());

app.use('/courses', routes);

app.use(errorMiddleware);

module.exports = app;