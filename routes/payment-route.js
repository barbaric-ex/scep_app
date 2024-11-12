const express = require("express");
const router = express.Router();
const PaymentController = require("../controllers/PaymentController");

router.get("/", PaymentController.index);

router.post("/store", PaymentController.store);

module.exports = router;
