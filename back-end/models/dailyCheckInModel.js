const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dailyCheckinSchema = new Schema(
  {
    sleepQuality: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    stress: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    fatigue: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    energy: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    muscleSoreness: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    hoursOfSleep: {
      type: Number,
      required: true,
      min: 0,
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DailyCheckin", dailyCheckinSchema);
