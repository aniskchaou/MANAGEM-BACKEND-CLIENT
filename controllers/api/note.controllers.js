const { findNoteById, updateNote, deleteNoteById, deleteAllNotes, findAllNotes, createNote } = require("../../services/note.services");



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
        description: req.body.description
    }

    createNote(patient, res)
};

exports.findAll = (req, res) => {

    findAllNotes(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findNoteById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateNote(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteNoteById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllNotes(req, res)
};