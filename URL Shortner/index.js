const express = require("express");
const URL = require("../models/url"); //URL Database
const path = require("path"); //To render the Views
const cookirParser = require("cookie-parser"); //To parse the cookies

const { connectMongoDbUrl } = require("./connection");  //
const {checkForAuthentication, restrictToRole}= require("../middleware/authuser")

const urlRoute = require("../routes/url");
const staticRoute = require("../routes/staticRouter");
const authRoute = require("../routes/authUser");

const app = express(); //My App
const PORT = 8003;

connectMongoDbUrl("mongodb://127.0.0.1:27017/shortUrl").then(() =>
  console.log("Mongo Server Started")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json()); //supports json data from postman
app.use(express.urlencoded({ extended: false })); //supports form data
app.use(cookirParser());
app.use(checkForAuthentication);

app.use("/url", restrictToRole(["Normal", "Admin"]), urlRoute); //To use the URL Shortner
app.use("/user", authRoute); //To statefull authorise the Signup and Login
app.use("/", staticRoute); //To render the views

app.use("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry?.redirectURL);
});

app.listen(PORT, () => console.log(`Port ${PORT} has started`)); 
