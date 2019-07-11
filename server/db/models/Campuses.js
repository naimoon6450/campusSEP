const Sequelize = require('sequelize');
const db = require('../dbconn');

// autopopulates newly created campus
const images = [
  'https://image.shutterstock.com/image-photo/statue-ny-600w-589147025.jpg',
  'https://image.shutterstock.com/image-photo/new-york-usa-october-2015-600w-1065178328.jpg',
  'https://image.shutterstock.com/image-photo/colorful-artistic-hdr-image-students-600w-513580375.jpg',
  'https://image.shutterstock.com/image-photo/colorful-hdr-image-central-quadrangle-600w-431117248.jpg',
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: () => {
      return getRandomImage();
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Campuses;
