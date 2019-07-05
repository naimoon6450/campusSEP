const { Students, Campuses, db } = require('./server/db');

const students = [
  { firstName: 'Naimun', lastName: 'Siraj', email: 'ns@fsa.com', gpa: 4.0 },
  { firstName: 'Siraj', lastName: 'Naimu', email: 'nsad@fsa.com', gpa: 3.5 },
  { firstName: 'Naymoon', lastName: 'Jaris', email: 'nsas@fsa.com', gpa: 2.3 },
  { firstName: 'Numian', lastName: 'Siraj', email: 'nsqw@fsa.com', gpa: 3.9 },
  { firstName: 'Nemo', lastName: 'Sensei', email: 'nsas1@fsa.com', gpa: 3.6 },
];

const campuses = [
  {
    name: 'Columbia University',
    address: '116th St & Broadway, New York, NY 10027',
  },
  { name: 'NYU Tandon', address: '6 MetroTech Center, Brooklyn, NY 11201' },
  {
    name: 'Full Stack University',
    address: '5 Hanover Square 11th Floor, New York, NY 10004',
  },
];

const getRandomCampusId = () => Math.floor(Math.random() * campuses.length) + 1;

// seeding database
const seed = () => {
  db.sync({ force: true })
    .then(() => {
      console.log('db synced');
      Promise.all(
        students.map(student => {
          Students.create(student).then(student => {
            student.setCampus(getRandomCampusId());
          });
        })
      );
      Promise.all(
        campuses.map(campus => {
          Campuses.create(campus);
        })
      );
    })
    .then(() => {
      console.log('db seeded');
    })
    .catch(e => console.error(e));
};

seed();
