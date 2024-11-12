const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/StudentController");

router.get("/", StudentController.index);
router.get("/create", StudentController.create);
router.get("/show/:id", StudentController.show);

//post

router.post("/create", StudentController.store);

module.exports = router;
