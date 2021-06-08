const express = require("express");

const courseRouter = require("./courseRouter");
const studentRouter = require("./studentRouter");
const teacherRouter = require("./teacherRouter");

const router = express.Router();

router.use("/courses", courseRouter);
router.use("/students", studentRouter);
router.use("/teachers", teacherRouter);

module.exports = router;
