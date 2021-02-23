const express = require("express");
require("./model/database");
const router = express.Router();
const { addVisit, getVisits, getVisitById } = require("./model/visitor");
const { createVisitor } = require("./validate/visitor");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/visit", (req, res) => {
  try {
    console.log("req: ", req.body);

    const { error, value } = createVisitor.validate(req.body, {
      abortEarly: false,
    });
    if (error) return res.status(400).send({ error: error.details });
    console.log("value", value);
    addVisit(value, function (visit) {
      console.log("visitor : ", visit);
      res.send({ visit });
    });
  } catch (err) {
    return res.status(500).send({ error: "Something went wrong." });
  }
});

app.get("/visits", (req, res) => {
  getVisits(null, function (visits) {
    console.log("visitor : ", visits);
    res.send({ visits });
  });
});

app.get("/visits/:id", (req, res) => {
  const visitId = req.params.id;
  getVisitById(visitId, function (visit) {
    console.log("visitor : ", visit);
    res.send({ visit });
  });
});

module.exports = router;

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on port ${port}...`));
