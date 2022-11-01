var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Client = sequelize.define('client', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    phone: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    company: Sequelize.STRING,
    type: Sequelize.STRING,
    owner: Sequelize.STRING,
    address: Sequelize.STRING,
    website: Sequelize.STRING,
    email: Sequelize.STRING,
    vatNumber: Sequelize.STRING

});


module.exports = Client;


