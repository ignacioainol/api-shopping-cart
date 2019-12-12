const express = require('express');
const app = express();

app.use('/v1/products', require('./products'));

module.exports = app;