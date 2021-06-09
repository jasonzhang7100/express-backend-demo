const express = require("express");

const courseRouter = require("./courseRouter");

const router = express.Router();

// router.use("/students", studentRouter);
// router.use("/teachers", teacherRouter);
router.use("/courses", courseRouter);

module.exports = router;
