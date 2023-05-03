const express = require('express');

const app = express();

const port = 3000;

const homeroutes = require('./router/home.js');

app.use('/',homeroutes)

app.listen(port , console.log(`server is running ${port}`))