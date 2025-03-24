const express = require('express');
const newRouter = express.Router();
const indexRouter = require('./indexRouter');

newRouter.get('/', (req, res) => {
  res.render('messageForm');
});

newRouter.post('/', (req, res) => {
    const message = req.body.message;
    const author = req.body.author;
    indexRouter.updateMessages(message, author);
    res.redirect("/")
});

module.exports = newRouter;