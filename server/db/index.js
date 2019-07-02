const Students = require('./models/Students');
const Campuses = require('./models/Campuses');
const db = require('./dbconn');

// associations
Campuses.hasMany(Students);
Students.belongsTo(Campuses);

module.exports = { Students, Campuses, db };
