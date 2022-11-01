var express = require('express');
var routerr = express.Router();

var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')
var taskController = require('../controllers/api/task.controllers')
var projectController = require('../controllers/api/project.controllers')
var noteController = require('../controllers/api/note.controllers')
var clientController = require('../controllers/api/client.controllers')
var mytaskController = require('../controllers/api/mytask.controllers')
var messageController = require('../controllers/api/message.controllers')
var contractController = require('../controllers/api/contract.controllers')
var teamController = require('../controllers/api/team.controllers')
var settingsController = require('../controllers/api/settings.controllers')



//users
routerr.post('/api/user', userController.create)
routerr.get('/api/user', userController.findAll)
routerr.get("/api/user/:id", userController.findOne);
routerr.put("/api/user/:id", userController.update);
routerr.delete("/api/user/:id", userController.delete);
routerr.delete("/api/user", userController.deleteAll);
routerr.get("/api/count/user/all", userController.findAllNumber);

//client
routerr.post('/api/client', clientController.create)
routerr.get('/api/client', clientController.findAll)
routerr.get("/api/client/:id", clientController.findOne);
routerr.put("/api/client/:id", clientController.update);
routerr.delete("/api/client/:id", clientController.delete);
routerr.delete("/api/client", clientController.deleteAll);
routerr.get("/api/count/client/all", clientController.findAllNumber);

//message
routerr.post('/api/message', messageController.create)
routerr.get('/api/message', messageController.findAll)
routerr.get("/api/message/:id", messageController.findOne);
routerr.put("/api/message/:id", messageController.update);
routerr.delete("/api/message/:id", messageController.delete);
routerr.delete("/api/message", messageController.deleteAll);


//mytask
/*
routerr.post('/api/mytask', mytaskController.create)
routerr.get('/api/mytask', mytaskController.findAll)
routerr.get("/api/mytask/:id", mytaskController.findOne);
routerr.put("/api/mytask/:id", mytaskController.update);
routerr.delete("/api/mytask/:id", mytaskController.delete);
routerr.delete("/api/mytask", mytaskController.deleteAll);
*/
routerr.get("/api/getfile", userController.getFile);
routerr.post("/api/addfile", userController.addFile);
//note
routerr.post('/api/note', noteController.create)
routerr.get('/api/note', noteController.findAll)
routerr.get("/api/note/:id", noteController.findOne);
routerr.put("/api/note/:id", noteController.update);
routerr.delete("/api/note/:id", noteController.delete);
routerr.delete("/api/note", noteController.deleteAll);


//project
routerr.post('/api/project', projectController.create)
routerr.get('/api/project', projectController.findAll)
routerr.get("/api/project/:id", projectController.findOne);
routerr.get("/api/project/search/:title", projectController.searchProject);
routerr.get("/api/project/copy/:id", projectController.copyProject);
routerr.put("/api/project/:id", projectController.update);
routerr.delete("/api/project/:id", projectController.delete);
routerr.delete("/api/project", projectController.deleteAll);
routerr.post('/api/project/filterproject', projectController.filterProject)
routerr.get('/api/findprojectbystatus', projectController.findProjectByStatus)

//task
routerr.post('/api/task', taskController.create)
routerr.get('/api/task', taskController.findAll)
routerr.get("/api/task/:id", taskController.findOne);
routerr.put("/api/task/:id", taskController.update);
routerr.delete("/api/task/:id", taskController.delete);
routerr.delete("/api/task", taskController.deleteAll);
routerr.get('/api/mytask/:id', taskController.findMyAllTasks)

//contract
routerr.post('/api/contract', contractController.create)
routerr.get('/api/contract', contractController.findAll)
routerr.get("/api/contract/:id", contractController.findOne);
routerr.put("/api/contract/:id", contractController.update);
routerr.delete("/api/contract/:id", contractController.delete);
routerr.delete("/api/contract", contractController.deleteAll);

//team
routerr.post('/api/team', teamController.create)
routerr.get('/api/team', teamController.findAll)
routerr.get("/api/team/:id", teamController.findOne);
routerr.put("/api/team/:id", teamController.update);
routerr.delete("/api/team/:id", teamController.delete);
routerr.delete("/api/team", teamController.deleteAll);
routerr.post("/api/user/login", userController.login);

//Home
/*
routerr.get('/about', indexController.getAbout)
routerr.get('/blog', indexController.getBlog)
routerr.get('/contact', indexController.getContact)
routerr.get('/elements', indexController.getElements)
routerr.get('/opening', indexController.getOpeningHours)
routerr.get('/pricing', indexController.getPricing)
routerr.get('/services', indexController.getServices)
*/
routerr.get('/', indexController.getHome)

routerr.get("/api/count/project/all", projectController.findAllNumber);
routerr.get("/api/count/project/todo", projectController.findToDo);
routerr.get("/api/count/project/inprogress", projectController.findInProgress);
routerr.get("/api/count/project/done", projectController.findDone);
routerr.get("/api/count/project/blocked", projectController.findBlocked);
routerr.get("/api/count/project/top", projectController.findTop);

routerr.get("/api/count/task/all", taskController.findAllNumber);
routerr.get("/api/count/task/todo", taskController.findToDo);
routerr.get("/api/count/task/inprogress", taskController.findInProgress);
routerr.get("/api/count/task/inreview", taskController.findInReview);
routerr.get("/api/count/task/completed", taskController.findCompleted);
routerr.get("/api/count/task/top", taskController.findTop);

routerr.get("/api/syssettings", settingsController.findSystemSettings);
routerr.put("/api/edit/systemsettings/:id", settingsController.updateSystemSettings);
routerr.get("/api/restore/syssettings/:id", settingsController.restoreSystemSettings);
routerr.get("/api/dashboardsettings", settingsController.findDashboardSettings);
routerr.put("/api/edit/dashboardsettings/:id", settingsController.updateDashboardSettings);
routerr.get("/api/restore/dashboard/:id", settingsController.restoreDashboardSettings);
routerr.get("/api/emailtemplatesettings", settingsController.findEmailTemplateSettings);
routerr.get("/api/emailsettings", settingsController.findEmailSettings);
routerr.put("/api/edit/emailsettings/:id", settingsController.updateEmailSettings);
routerr.get("/api/footersettings", settingsController.findFooterSettings);
routerr.put("/api/edit/footersettings/:id", settingsController.updateFooterSettings);
routerr.get("/api/restore/footer/:id", settingsController.restoreFooterSettings);
routerr.get("/api/headersettings", settingsController.findHeaderSettings);
routerr.put("/api/edit/headersettings/:id", settingsController.updateHeaderSettings);
routerr.get("/api/restore/header/:id", settingsController.restoreHeaderSettings);
routerr.get("/api/localisationsettings", settingsController.findLocalisationSettings);
routerr.put("/api/edit/localisationsettings/:id", settingsController.updateLocalisationSettings);
routerr.get("/api/notificationsettings", settingsController.findNotificationSettings);
routerr.put("/api/edit/notificationsettings/:id", settingsController.updateNotificationsSettings);
module.exports = routerr;

