const studentRouter = require('express').Router();
const { Students } = require('../db');

// getting all the students
studentRouter.get('/', (req, res, next) => {
  Students.findAll()
    .then(resp => {
      res.json(resp);
    })
    .catch(next);
});

module.exports = studentRouter;
