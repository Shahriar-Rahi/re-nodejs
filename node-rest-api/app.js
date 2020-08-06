const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();

//app.use(auth);

//middlewares

app.use(cors());

app.use(bodyParser.json());

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("we are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on post");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to the database")
);

app.listen(3000);
