const mongoose = require("mongoose");
const dotenv = require("dotenv");
require('dotenv').config({ path: 'ENV_FILENAME' });

const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = mongoose.connection;
