const express = require('express');
const app = express();
const port = process.env.PORT || 5175;
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const seeMessageRouter = require('./routes/seeMessageRouter');
const path = require("node:path");
const { error } = require('node:console');

app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/new', newRouter);
app.use('/seeMessage', seeMessageRouter);
app.use('/', indexRouter.indexRouter);
app.use('*', (req, res) => {
  res.render('error', { error: "You seem lost ..?" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).render('error', { error: err }); 
});