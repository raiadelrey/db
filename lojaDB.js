const sequelize = require('sequelize');
const { default: Sequelize } = require('sequelize/types/sequelize');
const sequelize = new Sequelize(('lojaDB', 'Raiane', 'rai123'), {dialect:'mysql', host: 'localhost'});

module.exports = sequelize;
