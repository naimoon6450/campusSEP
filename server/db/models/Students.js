const Sequelize = require('sequelize');
const db = require('../dbconn');

// will auto populate a new students picture
const images = [
  'https://i.dlpng.com/static/png/124565_preview.png',
  'https://i.dlpng.com/static/png/2290816_preview.png',
  'https://www.pngkey.com/png/full/169-1698863_picture-fullmetal-alchemist-edward-chibi.png',
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

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
    defaultValue: () => {
      return getRandomImage();
    },
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
