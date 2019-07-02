const Sequelize = require('sequelize');
const db = require('../dbconn');

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpocketmortys.net%2Fimages%2Fassets%2FMortyMiniFront.png&imgrefurl=https%3A%2F%2Fpocketmortys.net%2Fmortys%2Frock%2F074-mini-morty&docid=IfEVPWFCEClEpM&tbnid=Lm0_kG1wKDVVuM%3A&vet=10ahUKEwi16vLl9JTjAhUhh-AKHbc3CmcQMwhTKAAwAA..i&w=300&h=650&bih=707&biw=1205&q=morty%20small&ved=0ahUKEwi16vLl9JTjAhUhh-AKHbc3CmcQMwhTKAAwAA&iact=mrc&uact=8',
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      isFloat: true,
      isBetween(value) {
        if (value < 0.0 || value > 4.0) {
          throw new Error('GPA must be between 0.0 and 4.0');
        }
      },
    },
  },
});

module.exports = Students;
