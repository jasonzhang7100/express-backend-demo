const Course = require("../models/course");

const getAllCourses = async (req, res) => {
  const courses = await Course.find().exec();
  return res.json(courses);
};

const createCourse = async (req, res) => {
  const { courseCode, name, description } = req.body;
  // 创建docu的方法：new Model()，这里最好不要直接传req.body，防止污染表格里其他数据
  const course = new Course({ _id: courseCode, name, description });
  await course.save();
  return res.status(201).json(course);
};

module.exports = { getAllCourses, createCourse };
