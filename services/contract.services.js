
const Contract = require("../models/contract.models");

exports.findAllContracts = (res) => {

    Contract.findAll({})
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

exports.createContract = (income, res) => {
    Contract.create(income)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Contract."
            });
        });
}

exports.findContractById = (id) => {
    Contract.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Contract with id=" + id
            });
        });
}

exports.deleteContractById = (id, res) => {
    Contract.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contract was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Contract with id=${id}. Maybe Contract was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Contract with id=" + id
            });
        });
}

exports.updateContract = (id, req, res) => {
    Contract.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Contract was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Contract with id=${id}. Maybe Contract was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Contract with id=" + id
            });
        });
}

exports.deleteAllContracts = () => {
    Contract.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Contract were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}