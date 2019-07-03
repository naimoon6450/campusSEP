const campusRouter = require("express").Router();
const { Campuses } = require("../db");

// getting all the campuses /api/campuses
campusRouter.get("/campuses", (req, res, next) => {
  Campuses.findAll()
    .then(resp => {
      res.json(resp);
    })
    .catch(next);
});

// get a single campus /api/campuses/:id
campusRouter.get("/campuses/:id", (req, res, next) => {
  const campusId = req.params.id;
  Campuses.findByPk(campusId)
    .then(resp => {
      res.json(resp);
    })
    .catch(next);
});

module.exports = campusRouter;
