const express = require("express");
const router = express.Router();
const EnrollmentController = require("../controllers/EnrollmentController");

router.post("/store", EnrollmentController.store);

module.exports = router;
