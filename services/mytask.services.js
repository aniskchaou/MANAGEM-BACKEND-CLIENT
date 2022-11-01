
const MyTask = require("../models/mytask.models");

exports.findAllMyTasks = (res) => {

    MyTask.findAll({})
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

exports.createMyTask = (income) => {
    MyTask.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the MyTask."
            });
        });
}

exports.findMyTaskById = (id) => {
    MyTask.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving MyTask with id=" + id
            });
        });
}

exports.deleteMyTaskById = (id, res) => {
    MyTask.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "MyTask was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete MyTask with id=${id}. Maybe MyTask was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete MyTask with id=" + id
            });
        });
}

exports.updateMyTask = (id, req) => {
    MyTask.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "MyTask was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update MyTask with id=${id}. Maybe MyTask was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating MyTask with id=" + id
            });
        });
}

exports.deleteAllMyTasks = () => {
    MyTask.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} MyTask were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}