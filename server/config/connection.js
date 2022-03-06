<<<<<<< HEAD
require('dotenv').config()
console.log(process.env) 
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
=======
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
>>>>>>> c6244dfb8588a18a28978727c2a494d079f7b1f0

module.exports = mongoose.connection;




