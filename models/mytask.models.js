var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var MyTask = sequelize.define('mytask', {
    todo: Sequelize.STRING,
    due_date: Sequelize.STRING
});


module.exports = MyTask;
