var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Task = sequelize.define('task', {
    project: Sequelize.STRING,
    description: Sequelize.STRING,
    title: Sequelize.STRING,
    startdate: Sequelize.STRING,
    deadline: Sequelize.STRING,
    priority: Sequelize.STRING,
    assigned:Sequelize.STRING,
    status: Sequelize.STRING, //toDo in progress review done blocked
    complexity: Sequelize.STRING,
    labels: Sequelize.STRING
});

module.exports = Task;