const mongoose = require("mongoose");
const dotenv = require("dotenv");
require('dotenv').config({ path: 'ENV_FILENAME' });

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wordlingoers:t0OpX5WYYXMiutuV@cluster0.1ckxt.mongodb.net/wordlingodb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = mongoose.connection;
