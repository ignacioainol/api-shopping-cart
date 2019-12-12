const express = require('express');
const app = express();
const routes = require('./routes');

//set port
app.set('port', process.env.PORT || 3000);

app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`here i am, in port ${app.get('port')}`);
})