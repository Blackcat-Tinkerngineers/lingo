const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://wordlingoers:66Py2E1rurPhn1VZ@cluster0.1ckxt.mongodb.net/wordlingoDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
