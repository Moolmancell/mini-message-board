const express = require('express');
const seeMessageRouter = express.Router();

seeMessageRouter.get('/', (req, res) => {
    if (Object.keys(req.query).length === 0) {
        res.render('noMessage');
    } else {
        res.render('seeMessage', {message: req.query.message, user: req.query.user});
    }
})

module.exports = seeMessageRouter;