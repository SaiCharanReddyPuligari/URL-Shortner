const mongoose = require("mongoose");

// //Building MongoDB Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true, //Madatory
    },
    email: {
      type: String,
      required: true,
      unique: true, //No duplicates
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },

  { timestamps: true }
);

//creating the Model for the Schema
const User = mongoose.model("user", userSchema);

module.exports = User;
