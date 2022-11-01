const { findMyTaskById, updateMyTask, deleteMyTaskById, deleteAllMyTasks, findAllMyTasks, createMyTask } = require("../../services/mytask.services");



exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const patient = {
        namepatient: req.body.namepatient,
        emailpatient: req.body.emailpatient,
        birth: req.body.birth,
        telephone: req.body.telephone,
        gender: req.body.gender,
        address: req.body.address
    }

    createMyTask(patient, res)
};

exports.findAll = (req, res) => {

    findAllMyTasks(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findMyTaskById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateMyTask(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteMyTaskById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllMyTasks(req, res)
};