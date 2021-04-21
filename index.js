const express = require("express");
const moment = require("moment");
require("dotenv").config();
var cors = require("cors");

require("./model/database");
const router = express.Router();
const { addVisit, getVisits, getVisitById } = require("./model/visitor");
const { createVisitor } = require("./validate/visitor");
const app = express();

const { sendMail } = require("./services/mail");
const hostMail = require("./mail/hostMail");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/visit", (req, res) => {
  try {
    const { error, value } = createVisitor.validate(req.body, {
      abortEarly: false,
    });
    if (error) return res.status(400).send({ error: error.details });
    addVisit(value, function (visit) {
      sendMail({
        to: value.host.email,
        subject: "Visitor Notification",
        html: hostMail({
          name: `${value.firstName} ${value.lastName}`,
          location: "LDRP Campus, Gandhinagar",
          date: moment().format("MMMM Do YYYY"),
          time: moment().format("h:mm a"),
          link: `http://localhost:3001/visits/${visit._id}`,
        }),
      });
      res.send({ visit });
    });
  } catch (err) {
    return res.status(500).send({ error: "Something went wrong." });
  }
});

app.get("/visits", (req, res) => {
  getVisits(null, function (visits) {
    res.send({ visits });
  });
});

app.get("/visits/:id", (req, res) => {
  const visitId = req.params.id;
  getVisitById(visitId, function (visit) {
    if (visit.error) {
      res.status(400).send({ error: visit.error });
    }
    res.send({ visit });
  });
});

app.post("/hostreply", (req, res) => {
  const visitId = req.body.visitId;
  const hostReply = req.body.hostReply;

  getVisitById(visitId, async function (visit) {
    if (visit.error) {
      res.status(400).send({ error: visit.error });
    }
    visit.host = { ...visit.host, hostReply };
    await visit.save();
    res.send({ success: true });
  });
});

module.exports = router;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on port ${port}...`));
