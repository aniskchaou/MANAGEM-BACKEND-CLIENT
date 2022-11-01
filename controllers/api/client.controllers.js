const { findAllNumber, findClientById, updateClient, deleteClientById, deleteAllClients, findAllClients, createClient } = require("../../services/client.services");

exports.findAllNumber = (req, res) => {
    findAllNumber(res)
};

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

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        password: req.body.password,
        email: req.body.email,
        company: req.body.company
    }

    createClient(patient, res)
};

exports.findAll = (req, res) => {

    findAllClients(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findClientById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateClient(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteClientById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllClients(req, res)
};