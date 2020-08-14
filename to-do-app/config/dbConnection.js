const mongoose = require("mongoose");
require('dotenv').config()

const MongoServer = async (server) => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = { MongoServer };