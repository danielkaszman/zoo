const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
  VisitingDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  TicketType: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
});

const VisitorModel = mongoose.model("Visitors", VisitorSchema);
module.exports = VisitorModel;
