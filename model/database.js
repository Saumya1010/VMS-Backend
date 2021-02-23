const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.rpdmz.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("connected to db ----");
});

module.exports = db;
