const express = require('express')
const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

function updateMessages(message, author) {
  messages.push({text: message, user: author, added: new Date()});
}

indexRouter.get('/', (req, res) => {
  res.render('index', {title: "Mini Messageboard", messages: messages});
});

module.exports = {indexRouter, updateMessages};