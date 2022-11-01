
const config = require("../config/connection.server");
const Task = require("../models/task.models");

exports.findAllTasks = (res) => {

    Task.findAll({})
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


exports.findAllMyTasks = (user, res) => {

    console.log(config.user)
    Task.findAll({
        where: { "assigned": user }
    })
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

exports.findInProgressTasks = (res) => {

    Task.findAll({ limit: 5 })
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

exports.createTask = (income, res) => {
    Task.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Task."
            });
        });
}

exports.findTaskById = (id) => {
    Task.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Task with id=" + id
            });
        });
}

exports.deleteTaskById = (id, res) => {
    Task.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Task was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Task with id=" + id
            });
        });
}

exports.updateTask = (id, req, res) => {
    Task.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Task was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Task with id=${id}. Maybe Task was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Task with id=" + id
            });
        });
}

exports.deleteAllTasks = () => {
    Task.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Task were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}

exports.findAllNumber = (res) => {
    Task.count().then(data => {
        console.log(data)
        res.send({ "all": data })
    })
};
exports.findToDo = (res) => {
    Task.count({
        where: [{ "status": 'Todo' }]
    }).then(data => {
        res.send({ "todo": data })

    })
};
exports.findInProgress = (res) => {
    Task.count({
        where: [{ "status": 'In Progress' }]
    }).then(data => {
        res.send({ "inprogress": data })

    })
};
exports.findInReview = (res) => {
    Task.count({
        where: [{ "status": 'In Review' }]
    }).then(data => {
        res.send({ "inreview": data })

    })
};

exports.findCompleted = (res) => {
    Task.count({
        where: [{ "status": 'Completed' }]
    }).then(data => {
        res.send({ "completed": data })

    })
};