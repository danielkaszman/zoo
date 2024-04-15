const mongoose = require("mongoose");

const MedicalRecordSchema = new mongoose.Schema({
  AnimalID: {
    type: String,
    required: true,
  },
  VeteritarianID: {
    type: String,
    required: true,
  },
  Diagnosis: {
    type: String,
    required: true,
  },
  Treatment: {
    type: String,
    required: true,
  },
});

const MedicalRecordModel = mongoose.model(
  "MedicalRecords",
  MedicalRecordSchema
);
module.exports = MedicalRecordModel;
