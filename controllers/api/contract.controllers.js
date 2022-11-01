const { findContractById, updateContract, deleteContractById, deleteAllContracts, findAllContracts, createContract } = require("../../services/contract.services");



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
        title: req.body.title,
        date: req.body.date,
        client: req.body.client,
        project: req.body.project,
        company: req.body.company,
        contractValue: req.body.contractValue,
        contractType: req.body.contractType,
        website: req.body.website,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
    }

    createContract(patient, res)
};

exports.findAll = (req, res) => {

    findAllContracts(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findContractById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateContract(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteContractById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllContracts(req, res)
};