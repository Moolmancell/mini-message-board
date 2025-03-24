const express = require('express')
const newRouter = express.Router();

newRouter.get('/', (req, res) => {
  res.send('Hello World! from new');
});

module.exports = newRouter;