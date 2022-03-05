const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, 
  {
    useNewUrlParser:true, 
    useCreateIndex:true
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose.connection;
