const express = require("express");
const router = express.Router();
const FeedingModel = require("../Models/FeedingModel");

router.post("/addFeeding", async (req, res) => {
  const newFeeding = new FeedingModel({
    AnimalID: req.body.animalID,
    KeeperID: req.body.keeperID,
    FeedingNote: req.body.note,
  });

  await newFeeding.save();

  res.sendStatus(200);
});

router.get("/getFeedings", async (req, res) => {
  let foundFeedings = await FeedingModel.find({});

  if (!foundFeedings) {
    res.send("No data!");
    return;
  }

  res.send(foundFeedings);
});

module.exports = router;
