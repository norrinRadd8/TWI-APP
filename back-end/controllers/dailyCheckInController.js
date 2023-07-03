const DailyCheckin = require("../models/dailyCheckInModel");
const mongoose = require("mongoose");

const createDailyCheckin = async (req, res) => {
  const { sleepQuality, stress, fatigue, energy, muscleSoreness } = req.body;

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
    muscleSoreness > 10
  ) {
    return res.status(400).json({ error: "Please provide all ratings" });
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

// const DailyCheckIn = require("../models/dailyCheckInModel");
// const mongoose = require("mongoose");

// // Get all daily check-ins
// const getDailyCheckIns = async (req, res) => {
//   const user_id = req.user._id;

//   const checkIns = await DailyCheckIn.find({ user_id }).sort({ createdAt: -1 });

//   res.status(200).json(checkIns);
// };

// // Get a single daily check-in
// const getDailyCheckIn = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such daily check-in" });
//   }

//   const checkIn = await DailyCheckIn.findById(id);

//   if (!checkIn) {
//     return res.status(404).json({ error: "No such daily check-in" });
//   }

//   res.status(200).json(checkIn);
// };

// // Create a new daily check-in
// const createDailyCheckIn = async (req, res) => {
//   const { rating } = req.body;

//   let emptyFields = [];

//   if (!rating) {
//     emptyFields.push("rating");
//   }
//   if (emptyFields.length > 0) {
//     return res.status(400).json({ error: "Please provide rating" });
//   }

//   try {
//     const user_id = req.user._id;
//     const checkIn = await DailyCheckIn.create({ rating, user_id });
//     res.status(200).json(checkIn);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a daily check-in
// const deleteDailyCheckIn = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such daily check-in" });
//   }

//   const checkIn = await DailyCheckIn.findOneAndDelete({ _id: id });

//   if (!checkIn) {
//     return res.status(400).json({ error: "No such daily check-in" });
//   }

//   res.status(200).json(checkIn);
// };

// // Update a daily check-in
// const updateDailyCheckIn = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such daily check-in" });
//   }

//   const checkIn = await DailyCheckIn.findOneAndUpdate(
//     { _id: id },
//     { ...req.body },
//     { new: true }
//   );

//   if (!checkIn) {
//     return res.status(400).json({ error: "No such daily check-in" });
//   }

//   res.status(200).json(checkIn);
// };

// module.exports = {
//   getDailyCheckIns,
//   getDailyCheckIn,
//   createDailyCheckIn,
//   deleteDailyCheckIn,
//   updateDailyCheckIn,
// };
