const express = require("express");
const router = express.Router();
const VeteritarianModel = require("../Models/VeteritarianModel");

router.post("/addVeteritarian", async (req, res) => {
  const newVeteritarian = new VeteritarianModel({
    Name: req.body.name,
    Specialization: req.body.specialization,
    YearsOfExperience: req.body.yearsOfExperience,
  });

  await newVeteritarian.save();

  res.sendStatus(200);
});

router.get("/getVeteritarians", async (req, res) => {
  let foundVeteritarians = await VeteritarianModel.find({});

  if (!foundVeteritarians) {
    res.send("No data!");
    return;
  }

  res.send(foundVeteritarians);
});

module.exports = router;
