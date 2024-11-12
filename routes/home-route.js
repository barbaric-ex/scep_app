const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/", HomeController.index);
router.get("/logout", HomeController.logout);

router.post("/login", HomeController.login);

module.exports = router;
