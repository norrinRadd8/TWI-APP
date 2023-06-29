const express = require("express");
const {
  createDailyCheckIn,
  getDailyCheckIns,
  getDailyCheckIn,
  deleteDailyCheckIn,
  updateDailyCheckIn,
} = require("../controllers/dailyCheckInController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all daily check-in routes
router.use(requireAuth);

// GET all daily check-ins
router.get("/", getDailyCheckIns);

// GET a single daily check-in
router.get("/:id", getDailyCheckIn);

// POST a new daily check-in
router.post("/", createDailyCheckIn);

// DELETE a daily check-in
router.delete("/:id", deleteDailyCheckIn);

// UPDATE a daily check-in
router.patch("/:id", updateDailyCheckIn);

module.exports = router;
