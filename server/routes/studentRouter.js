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

// post request to add new student /api/students
studentRouter.post("/students", (req, res, next) => {
  // the req.body should have the relevant data fields to add new
  Students.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  })
    .spread((user, created) => {
      created ? res.send(user) : res.send("Campus not created");
    })
    .catch(next);
});

// delete a student /api/campus
studentRouter.delete("/students/:id", (req, res, next) => {
  const studId = req.params.id;
  Students.destroy({ where: { id: studId } });
});

module.exports = studentRouter;
