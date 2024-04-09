const mongoose = require("mongoose");

const MedicalRecordSchema = new mongoose.Schema({
  AnimalID: {
    type: Number,
    required: true,
  },
  VeteritarianID: {
    type: Number,
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
  Medication: {
    type: String,
    required: true,
  },
});

const MedicalRecordModel = mongoose.model(
  "MedicalRecords",
  MedicalRecordSchema
);
module.exports = MedicalRecordModel;
