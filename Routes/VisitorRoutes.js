const express = require("express");
const router = express.Router();
const VisitorModel = require("../Models/VisitorModel");

router.post("/addVisitor", async (req, res) => {
  const newVisitor = new VisitorModel({
    Age: req.body.age,
    TicketType: req.body.ticketType,
  });

  await newVisitor.save();

  res.sendStatus(200);
});

router.get("/getVisitors", async (req, res) => {
  let foundVisitors = await VisitorModel.find({});

  if (!foundVisitors) {
    res.send("No data!");
    return;
  }

  res.send(foundVisitors);
});

module.exports = router;
