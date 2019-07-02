const campusRouter = require('express').Router();
const { Campuses } = require('../db');

// getting all the campuses
campusRouter.get('/', (req, res, next) => {
  Campuses.findAll()
    .then(resp => {
      res.json(resp);
    })
    .catch(next);
});

module.exports = campusRouter;
