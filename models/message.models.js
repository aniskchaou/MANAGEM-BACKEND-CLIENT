var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var Message = sequelize.define('message', {
    title: Sequelize.STRING,
    destination: Sequelize.STRING,
    message: Sequelize.STRING
});


module.exports = Message;
