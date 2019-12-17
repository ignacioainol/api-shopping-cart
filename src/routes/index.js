const express = require('express');
const app = express();

app.use('/v1/products', require('./products'));
app.use('/v1/categories', require('./categories'));

module.exports = app;