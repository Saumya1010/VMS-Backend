var mongoose = require("mongoose");
var db = require("./database");

// create an schema
var visitSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    visitType: String,
    host: {
      name: String,
      email: String,
    },
  },
  {
    timestamps: true,
  }
);

visit = mongoose.model("visit", visitSchema);

function addVisit(inputData, callback) {
  visitData = new visit(inputData);
  visitData.save(function (err, data) {
    if (err) throw err;
    console.log("data ---", data);
    return callback(data);
  });
}

function getVisits(inputData, callback) {
  visit.find({}, function (err, data) {
    if (err) throw err;
    console.log("data ---", data);
    return callback(data);
  });
}

function getVisitById(id, callback) {
  visit.findById(id, function (err, data) {
    if (err) throw err;
    console.log("data ---", data);
    return callback(data);
  });
}

module.exports = {
  addVisit,
  getVisits,
  getVisitById,
};
