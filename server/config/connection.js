const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
mongoose.createConnection(uri, 
  {
    useNewUrlParser:true, 
    useCreateIndex:true
  });

let connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose.connection;
