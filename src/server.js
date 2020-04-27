const express = require('express');
const routs = require('./routs');

require('./databse');

const app = express();

app.use(express.json());
app.use(routs);

app.listen(3333);