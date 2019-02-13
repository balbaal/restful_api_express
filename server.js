const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// Connect To DB
const db = require("./config/connect").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is Connected ... . ."))
  .catch(err => console.log(`Something ERROR Connecting On MongoDB : ${err}`));

// Routing End Point API Here

// Running Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Already Running On PORT : ${PORT}`));
