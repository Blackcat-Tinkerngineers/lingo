require('dotenv').config();
const mongoose = require('mongoose');

const mySecret = process.env['cluster0']

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/wordlingo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;




