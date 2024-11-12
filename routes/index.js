const express = require("express");

const router = express.Router();

router.use(["/students", "/courses", "/payments"], info);

router.use("/", require("./home-route"));
router.use("/students", require("./students-route"));
router.use("/courses", require("./courses-route"));
router.use("/enrollments", require("./enrollments-route"));
router.use("/payments", require("./payment-route"));

function info(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/");
  }
}

module.exports = router;
