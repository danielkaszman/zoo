const mongoose = require("mongoose");

const FeedingSchema = new mongoose.Schema({
  AnimalID: {
    type: Number,
    required: true,
  },
  KeeperID: {
    type: Number,
    required: true,
  },
  FeedingNote: {
    type: String,
    required: false,
  },
  FeedingDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const FeedingModel = mongoose.model("Feedings", FeedingSchema);
module.exports = FeedingModel;
