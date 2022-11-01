var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Project = sequelize.define('project', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    starting_date: Sequelize.STRING,
    ending_date: Sequelize.STRING,
    users: Sequelize.STRING,
    client: Sequelize.STRING,
    status:Sequelize.STRING ,//started, Finished, Pause, Canceled, Blocked, In progress
    price:Sequelize.STRING
});

module.exports = Project;