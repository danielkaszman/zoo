const express = require("express");
const router = express.Router();
const MedicalRecordModel = require("../Models/MedicalRecordModel");

router.post("/addMedicalRecord", async (req, res) => {
  const newMedicalRecord = new MedicalRecordModel({
    AnimalID: req.body.animalID,
    VeteritarianID: req.body.veteritarianID,
    Diagnosis: req.body.diagnosis,
    Treatment: req.body.treatment,
    Medication: req.body.medication,
  });

  await newMedicalRecord.save();

  res.sendStatus(200);
});

router.get("/getMedicalRecords", async (req, res) => {
  let foundMedicalRecords = await MedicalRecordModel.find({});

  if (!foundMedicalRecords) {
    res.send("No data!");
    return;
  }

  res.send(foundMedicalRecords);
});

module.exports = router;
