
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Team = sequelize.define('team', {
    name: Sequelize.STRING,
    minimum: Sequelize.STRING,
    maximum: Sequelize.STRING,
});


module.exports = Team;