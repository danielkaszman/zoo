const mongoose = require("mongoose");

const ZookeeperSchema = new mongoose.Schema({
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

const ZookeeperModel = mongoose.model("Zookeepers", ZookeeperSchema);
module.exports = ZookeeperModel;
