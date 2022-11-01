var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var SubTask = sequelize.define('sub_task', {
    name: Sequelize.STRING,
    status: Sequelize.STRING,
    task:Sequelize.STRING

});


module.exports = Task;
