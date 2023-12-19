const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      uinque: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type: String,
      required: true,
      default: "Normal",
    }
  },
  { timestamps: true }
);

//model
const UID = mongoose.model("uid", authSchema);

module.exports = UID;
