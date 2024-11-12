const express = require("express");
const router = express.Router();
const CoursesController = require("../controllers/CoursesController");

router.get("/", CoursesController.index);
router.get("/create", CoursesController.create);
router.post("/store", CoursesController.store);

module.exports = router;
