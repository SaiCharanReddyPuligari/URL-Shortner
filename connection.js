const mongoose = require("mongoose");

async function connectMongoDb(url) {
  mongoose.connect(url);
}

module.exports = {
  connectMongoDb,
};
