const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Connect To DB
const db = require("./config/connect").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is Connected ... . ."))
  .catch(err => console.log(`Something ERROR Connecting On MongoDB : ${err}`));

// Body Parsing Middleware
app.use(bodyParser.json());

// Require Routes
const News = require('./routes/api/news')

// Routing End Point API Here
app.use('/api/news', News)

// Running Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Already Running On PORT : ${PORT}`));
