const { configDotenv } = require("dotenv");
const mongoose = require("mongoose");
configDotenv();
const mongoURI = process.env.mongoURI;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connection Successfull");
  });
};

module.exports = connectToMongo;
