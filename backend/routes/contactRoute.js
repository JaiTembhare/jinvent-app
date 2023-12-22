const express = require("express");
const router = express.Router();
const protect = require("../middelWares/authMiddelware");
const { contastUs } = require("../controllers/contactController");

router.post("/", protect, contastUs);

module.exports = router;
