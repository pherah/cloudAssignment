const Sequelize = require('sequelize');
const db = require('../util/database');

const Person = db.define('person', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    age:Sequelize.INTEGER,
    gender:Sequelize.STRING,
    email: Sequelize.STRING,

});

module.exports = Person;