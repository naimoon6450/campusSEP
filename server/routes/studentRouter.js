const studentRouter = require("express").Router();
const { Students } = require("../db");

// getting all the students /api/students
studentRouter.get("/students", (req, res, next) => {
  Students.findAll()
    .then(resp => {
      res.json(resp);
    })
    .catch(next);
});

module.exports = studentRouter;
