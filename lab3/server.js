const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');

// db.sequelize.sync();

const router = require('./routes/index');

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port);
