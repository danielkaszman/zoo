const mongoose = require("mongoose");

const VeteritarianSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Specialization: {
    type: String,
    required: true,
  },
  YearsOfExperience: {
    type: Number,
    required: true,
  },
});

const VeteritarianModel = mongoose.model("Veteritarians", VeteritarianSchema);
module.exports = VeteritarianModel;
