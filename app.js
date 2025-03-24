const express = require('express');
const app = express();
const port = process.env.PORT || 5175;
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/new', newRouter);
app.use('/', indexRouter.indexRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});