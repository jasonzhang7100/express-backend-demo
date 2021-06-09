const { Schema, model } = require("mongoose");

const schema = new Schema({
  _id: { type: String, uppercase: true },
  name: { type: String, require: true },
  description: { type: String, default: "This is a course description." },
});

schema.virtual("courseCode").get(function () {
  return this._id;
});

module.exports = model("Course", schema);
