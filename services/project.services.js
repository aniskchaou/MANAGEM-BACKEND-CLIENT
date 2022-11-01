
const Project = require("../models/project.models");


exports.findProjectByStatus = (req, res) => {
    var started = 0
    var ending = 0
    Project.count({ where: { status: 'started' } }).then(data => {
        started = data
        Project.count({ where: { status: 'ended' } }).then(data2 => {
            ending = data2
            res.send({
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [started, ending],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            })

        })
    })



}

exports.copyProject = (id, res) => {
    Project.findByPk(id)
        .then(data => {
            console.log(data.dataValues)
            const project =
            {

                title: data.dataValues.title,
                description: data.dataValues.description,
                starting_date: data.dataValues.starting_date,
                ending_date: data.dataValues.ending_date,
                users: data.dataValues.users,
                client: data.dataValues.client

            }
            Project.create(project)
                .then(data2 => {
                    res.send(data2);
                })
        })

}
exports.findAllProjects = (res) => {

    Project.findAll({})
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

exports.findInProgressProjects = (res) => {

    Project.findAll({ limit: 5 })
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

exports.filterProject = (res, condition) => {
    Project.findAll({ where: { status: condition.status } })
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

exports.searchProject = (res, condition) => {
    Project.findAll({ where: { title: condition } })
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

exports.createProject = (income, res) => {
    Project.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Project."
            });
        });
}

exports.findProjectById = (id, res) => {
    Project.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Project with id=" + id
            });
        });
}

exports.deleteProjectById = (id, res) => {
    Project.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Project was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Project with id=${id}. Maybe Project was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Project with id=" + id
            });
        });
}

exports.updateProject = (id, req, res) => {
    Project.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Project was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Project with id=${id}. Maybe Project was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: "Error updating Project with id=" + id
            });
        });
}

exports.deleteAllProjects = () => {
    Project.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Project were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}



exports.findAllNumber = (res) => {
    Project.count().then(data => {
        console.log(data)
        res.send({ "all": data })
    })
};
exports.findToDo = (res) => {
    Project.count({
        where: [{ "status": 'Todo' }]
    }).then(data => {
        res.send({ "todo": data })

    })
};
exports.findInProgress = (res) => {
    Project.count({
        where: [{ "status": 'In Progress' }]
    }).then(data => {
        res.send({ "inprogress": data })

    })
};
exports.findDone = (res) => {
    Project.count({
        where: [{ "status": 'Done' }]
    }).then(data => {
        res.send({ "done": data })

    })
};

exports.findBlocked = (res) => {
    Project.count({
        where: [{ "status": 'Blocked' }]
    }).then(data => {
        res.send({ "blocked": data })

    })
};