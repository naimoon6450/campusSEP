const Sequelize = require('sequelize');
const db = require('../dbconn');

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
    defaultValue:
      'https://www.google.com/imgres?imgurl=http%3A%2F%2F3.bp.blogspot.com%2F_3k2ilY9vkCY%2FTGvaogBiYZI%2FAAAAAAAABcU%2Fg8loVega6Dc%2Fs1600%2F800px-Low_Library_Columbia_University_8-11-06.jpg&imgrefurl=http%3A%2F%2Fdaytoninmanhattan.blogspot.com%2F2010%2F08%2Fcolumbia-universitys-1897-low-library.html&docid=MOrIx5-WJ0dB_M&tbnid=CnBcBvft-bJZKM%3A&vet=10ahUKEwjItq338ZTjAhWQTt8KHRDfDk4QMwhWKAQwBA..i&w=800&h=600&bih=707&biw=1205&q=columbia%20university%20campus%20small%20pic&ved=0ahUKEwjItq338ZTjAhWQTt8KHRDfDk4QMwhWKAQwBA&iact=mrc&uact=8',
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
