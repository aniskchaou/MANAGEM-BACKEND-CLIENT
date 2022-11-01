
const Team = require("../models/team.models");

exports.findAllTeams = (res) => {

    Team.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
}

exports.createTeam = (income, res) => {
    Team.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Team."
            });
        });
}

exports.findTeamById = (id) => {
    Team.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Team with id=" + id
            });
        });
}

exports.deleteTeamById = (id, res) => {
    Team.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Team was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Team with id=${id}. Maybe Team was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Team with id=" + id
            });
        });
}

exports.updateTeam = (id, req, res) => {
    Team.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Team was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Team with id=${id}. Maybe Team was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Team with id=" + id
            });
        });
}

exports.deleteAllTeams = () => {
    Team.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Team were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}