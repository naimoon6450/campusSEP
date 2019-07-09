const campusRouter = require('express').Router();
const { Campuses } = require('../db');

// getting all the campuses /api/campuses
campusRouter.get('/campuses', (req, res, next) => {
  Campuses.findAll()
    .then(resp => {
      res.json(resp);
    })
    .catch(next);
});

// get a single campus /api/campuses/:id
campusRouter.get('/campuses/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campuses.findByPk(campusId)
    .then(resp => {
      res.json(resp);
    })
    .catch(next);
});

// post request to add new campus /api/campuses
campusRouter.post('/campuses', (req, res, next) => {
  // the req.body should have the relevant data fields to add new
  Campuses.findOrCreate({
    where: { name: req.body.uniName },
    defaults: {
      address: req.body.uniAddress,
      description: req.body.uniDescription,
    },
  })
    .spread((user, created) => {
      created ? res.send(user) : res.send('Campus not created');
    })
    .catch(next);
});

module.exports = campusRouter;
