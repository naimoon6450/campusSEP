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
      resp ? res.json(resp) : res.sendStatus(404);
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
    .spread((campus, created) => {
      created ? res.send(campus) : res.send('Campus not created');
    })
    .catch(next);
});

// delete a campus /api/campuses/id
campusRouter.delete('/campuses/:id', (req, res, next) => {
  const campId = req.params.id;
  Campuses.destroy({ where: { id: campId } })
    .then(resp => {
      res.sendStatus(200);
    })
    .catch(next);
});

module.exports = campusRouter;
