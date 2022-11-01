const { findAllMyTasks, findInProgressTasks, findCompleted, findInReview, findInProgress, findToDo, findAllNumber, findTaskById, updateTask, deleteTaskById, deleteAllTasks, findAllTasks, createTask } = require("../../services/task.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a user
    const patient = {
        project: req.body.project_id,
        description: req.body.description,
        title: req.body.title,
        startdate: req.body.deadline,
        priority: req.body.priority,
        status: req.body.status,
        assigned: req.body.assigned
    }

    createTask(patient, res)
};

exports.findAll = (req, res) => {

    findAllTasks(res)
};

exports.findMyAllTasks = (req, res) => {
    const user = req.params.id;
    findAllMyTasks(user, res)
};
exports.findTop = (req, res) => {

    findInProgressTasks(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findTaskById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateTask(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTaskById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllTasks(req, res)
};

exports.findAllNumber = (req, res) => {
    findAllNumber(res)
};
exports.findToDo = (req, res) => {
    findToDo(res)
};
exports.findInProgress = (req, res) => {
    findInProgress(res)
};
exports.findInReview = (req, res) => {
    findInReview(res)
};

exports.findCompleted = (req, res) => {
    findCompleted(res)
};