var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Note = sequelize.define('note', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
});

module.exports = Note;