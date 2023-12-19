//Building a REST API to expory the JSON
const express = require("express");
// const fs= require("fs");
// const users= require('./MOCK_DATA.json');

const userRouter = require("./routes/user.js");
const { connectMongoDb } = require("./connection.js");
const { logReqRes } = require("./middleware/index.js"); //as index the primary file, even without specifying it will work

const app = express();
const PORT = 8004;

connectMongoDb("mongodb://127.0.0.1:27017/myDB")
  .then(() => console.log("MogoDB connected"))
  .catch((err) => console.log("Mongo Error", err)); //if any error;

//Middleware to handle the data from the body or frontend
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Port ${PORT} has started`));
