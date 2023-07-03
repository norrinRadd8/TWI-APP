const express = require("express");
const {
  createDailyCheckin,
  getDailyCheckin,
} = require("../controllers/dailyCheckInController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Require auth for all daily check-in routes
router.use(requireAuth);

// POST a new daily check-in
router.post("/", createDailyCheckin);

// GET the latest daily check-in
router.get("/", getDailyCheckin);

module.exports = router;
