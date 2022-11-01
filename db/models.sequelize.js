var User = require("../models/user.models.js")
var sequelize = require("../db/init.sequelize")
var Sequelize = require('sequelize');
var seeds = require("./seeds.sequelize");
const Client = require("../models/client.models.js");
const Message = require("../models/message.models.js");
const MyTask = require("../models/mytask.models.js");
const Note = require("../models/note.models.js");
const Project = require("../models/project.models.js");
const Task = require("../models/task.models.js");
const Contract = require("../models/contract.models.js");
const Team = require("../models/team.models.js");
const DashboardSettings = require("../models/settings/dashboard.settings.models.js");
const EmailSettings = require("../models/settings/email.settings.models.js");
const FooterSettings = require("../models/settings/footer.settings.models.js");
const HeaderSettings = require("../models/settings/header.settings.models.js");
const SystemSettings = require("../models/settings/system.settings.models.js");
const NotificationSettings = require("../models/settings/notification.settings.models.js");
var LocalisationSettings = require("../models/settings/localisation.settings.models.js")

sequelize.sync().then(function () {
  User.bulkCreate(seeds.userSeed);
  /*  Client.create()
    Message.create()
    MyTask.create()
    Note.create()
    Project.create(seeds.projectSeed)
    Task.create()
    Contract.create()
    Team.create()*/
  DashboardSettings.create(seeds.getDashboardSettings())
  EmailSettings.create(seeds.getEmailSettings())
  FooterSettings.create(seeds.getFooterSettings())
  HeaderSettings.create(seeds.getHeaderSettings())
  LocalisationSettings.create(seeds.getLocalisationSettings())
  NotificationSettings.create(seeds.getNotificationSettings())
  SystemSettings.create(seeds.getSytemSettings())

}).then(function (res) {
  console.log(res);
});

