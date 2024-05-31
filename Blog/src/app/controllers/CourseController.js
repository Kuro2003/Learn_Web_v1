const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
const e = require("express");

class CourseController {
  // GET /news/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { courses: mongooseToObject(course) });
      })
      .catch(next);
  }

  // GET /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // POST /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error saving course");
      });
  }
}

module.exports = new CourseController();
