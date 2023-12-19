const mongoose = require("mongoose");

async function connectMongoDbUrl(url) {
  return mongoose.connect(url);
}

module.exports = {
  connectMongoDbUrl,
};

