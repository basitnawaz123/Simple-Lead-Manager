const mongoose = require("mongoose");

const leadSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Lead = mongoose.model("Lead", leadSchema);