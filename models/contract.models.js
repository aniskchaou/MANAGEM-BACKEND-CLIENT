var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Contract = sequelize.define('contract', {
    title: Sequelize.STRING,
    date: Sequelize.STRING,
    client: Sequelize.STRING,
    project: Sequelize.STRING,
    company: Sequelize.STRING,
    note: Sequelize.STRING,
    contractValue: Sequelize.STRING,
    contractType: Sequelize.STRING,
    website: Sequelize.STRING,
    startDate: Sequelize.STRING,
    endDate: Sequelize.STRING,
    description: Sequelize.STRING
});


module.exports = Contract;


