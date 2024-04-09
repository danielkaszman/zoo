const express = require("express");
const router = express.Router();
const AnimalModel = require("../Models/AnimalModel");

router.post("/addAnimal", async (req, res) => {
  const newAnimal = new AnimalModel({
    Species: req.body.species,
    Name: req.body.name,
    Age: req.body.age,
    Gender: req.body.gender,
    EnclosureID: req.body.enclosureID,
  });

  await newAnimal.save();

  res.sendStatus(200);
});

router.get("/getAnimals", async (req, res) => {
  let foundAnimals = await AnimalModel.find({});

  if (!foundAnimals) {
    res.send("No data!");
    return;
  }

  res.send(foundAnimals);
});

module.exports = router;
