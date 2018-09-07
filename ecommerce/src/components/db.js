const Sequelize = require('sequelize');


// const db = new Sequelize('mysql://root:root@localhost:8889/ecommerce');

const db = new Sequelize(
    'ecommerce',
    'root',
    'root',

    {
        dialect: 'mysql',
        host: 'localhost',
        port: '8889',
        operatorsAliases: false,
    }
);

const Users = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        defaultValue: "abhinav@gmail.com"
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }

})


db.sync().then(() => console.log("Database is ready"))

exports = module.exports = {
    db,
    Users
}