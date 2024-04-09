const express = require("express");
const router = express.Router();
const ZookeeperModel = require("../Models/ZookeeperModel");

router.post("/addZookeeper", async (req, res) => {
  const newZookeeper = new ZookeeperModel({
    Name: req.body.name,
    Specialization: req.body.specialization,
    YearsOfExperience: req.body.yearsOfExperience,
  });

  await newZookeeper.save();

  res.sendStatus(200);
});

router.get("/getZookeepers", async (req, res) => {
  let foundZookeepers = await ZookeeperModel.find({});

  if (!foundZookeepers) {
    res.send("No data!");
    return;
  }

  res.send(foundZookeepers);
});

module.exports = router;
