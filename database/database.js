const Sequelize = require('sequelize');

const connection = new Sequelize('guiaPerguntas', 'root', '12345gui', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;