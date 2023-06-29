const DailyCheckIn = require("../models/dailyCheckInModel");
const mongoose = require("mongoose");

// Get all daily check-ins
const getDailyCheckIns = async (req, res) => {
  const user_id = req.user._id;

  const checkIns = await DailyCheckIn.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(checkIns);
};

// Get a single daily check-in
const getDailyCheckIn = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such daily check-in" });
  }

  const checkIn = await DailyCheckIn.findById(id);

  if (!checkIn) {
    return res.status(404).json({ error: "No such daily check-in" });
  }

  res.status(200).json(checkIn);
};

// Create a new daily check-in
const createDailyCheckIn = async (req, res) => {
  const { question, rating } = req.body;

  if (!question || !rating) {
    return res
      .status(400)
      .json({ error: "Please provide both the question and rating" });
  }

  try {
    const user_id = req.user._id;
    const checkIn = await DailyCheckIn.create({ question, rating, user_id });
    res.status(200).json(checkIn);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a daily check-in
const deleteDailyCheckIn = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such daily check-in" });
  }

  const checkIn = await DailyCheckIn.findOneAndDelete({ _id: id });

  if (!checkIn) {
    return res.status(400).json({ error: "No such daily check-in" });
  }

  res.status(200).json(checkIn);
};

// Update a daily check-in
const updateDailyCheckIn = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such daily check-in" });
  }

  const checkIn = await DailyCheckIn.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!checkIn) {
    return res.status(400).json({ error: "No such daily check-in" });
  }

  res.status(200).json(checkIn);
};

module.exports = {
  getDailyCheckIns,
  getDailyCheckIn,
  createDailyCheckIn,
  deleteDailyCheckIn,
  updateDailyCheckIn,
};
