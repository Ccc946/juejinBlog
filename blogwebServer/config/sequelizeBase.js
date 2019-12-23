const Sequelize = require('sequelize');
const config = require('../dev_config');
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS,{
    host: config.DB_HOST,
    dialect: 'mysql',
});

module.exports = sequelize;