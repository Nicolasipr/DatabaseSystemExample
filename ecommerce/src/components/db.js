const Sequelize = require('sequelize');

// Or you can simply use a connection uri
const sequelize = new Sequelize('mysql://root:root@localhost:8889/ecommerce');

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });