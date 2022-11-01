const { findTeamById, updateTeam, deleteTeamById, deleteAllTeams, findAllTeams, createTeam } = require("../../services/team.services");



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
        name: req.body.name,
        minimum: req.body.minimum,
        maximum: req.body.maximum
    }

    createTeam(patient, res)
};

exports.findAll = (req, res) => {

    findAllTeams(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findTeamById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateTeam(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteTeamById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllTeams(req, res)
};