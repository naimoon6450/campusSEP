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

// get a single student /api/students/:id
studentRouter.get("/students/:id", (req, res, next) => {
  const studId = req.params.id;
  Students.findByPk(studId)
    .then(resp => {
      res.json(resp);
    })
    .catch(next);
});

module.exports = studentRouter;
