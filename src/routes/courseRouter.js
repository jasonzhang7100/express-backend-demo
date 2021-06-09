const express = require("express");

const { getAllCourses, createCourse } = require("../controllers/course");

const router = express.Router();

router.get("", getAllCourses);
// router.get("/:id", getCourseById);
router.post("", createCourse);
// router.put("/:id", updateCourseById);
// router.delete("/:id", deleteCourseById);

module.exports = router;
