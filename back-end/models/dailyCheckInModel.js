const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dailyCheckInSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DailyCheckIn", dailyCheckInSchema);
