const DailyCheckin = require("../models/dailyCheckInModel");
const mongoose = require("mongoose");

const createDailyCheckin = async (req, res) => {
  const {
    sleepQuality,
    stress,
    fatigue,
    energy,
    muscleSoreness,
    hoursOfSleep,
    checkInDate,
  } = req.body;

  console.log("Request Body:", req.body);

  // Convert checkInDate string to a Date object
  const selectedDate = new Date(checkInDate);
  const today = new Date(); // Get the current date

  // Check if checkInDate is a future date
  if (selectedDate > today) {
    return res
      .status(400)
      .json({ error: "Please select a date in the past or today" });
  }

  // Validation
  if (
    sleepQuality < 1 ||
    sleepQuality > 10 ||
    stress < 1 ||
    stress > 10 ||
    fatigue < 1 ||
    fatigue > 10 ||
    energy < 1 ||
    energy > 10 ||
    muscleSoreness < 1 ||
    muscleSoreness > 10 ||
    hoursOfSleep < 0 ||
    !checkInDate
  ) {
    return res
      .status(400)
      .json({ error: "Please provide valid data for all fields" });
  }

  // Create new daily check-in
  try {
    const user_id = req.user._id;
    const dailyCheckin = await DailyCheckin.create({
      sleepQuality,
      stress,
      fatigue,
      energy,
      muscleSoreness,
      hoursOfSleep,
      checkInDate,
      user_id,
    });
    res.status(200).json(dailyCheckin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDailyCheckin = async (req, res) => {
  const user_id = req.user._id;

  try {
    const dailyCheckin = await DailyCheckin.findOne({ user_id }).sort({
      createdAt: -1,
    });

    if (!dailyCheckin) {
      return res.status(404).json({ error: "No daily check-in found" });
    }

    res.status(200).json(dailyCheckin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDailyCheckin,
  getDailyCheckin,
};
