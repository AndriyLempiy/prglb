const express = require('express');
const router = express.Router();

const todoRouter = require('./todo');

router.use('/todos', todoRouter);

module.exports = router;
