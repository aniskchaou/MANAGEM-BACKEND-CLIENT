
const { loginUser, findAllNumber, findAll, findAllUsers, createUser, findUserById, deleteUserById, updateUser, deleteAllUsers } = require("../../services/user.services");

var fs = require('fs');
var path = require('path');
var formidable = require('formidable');

const multer = require("multer");
const upload = multer({ dest: "/" });

exports.findAllNumber = (req, res) => {
    findAllNumber(res)
};
exports.login = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const user = {
        username: req.body.username,
        password: req.body.password,

    }

    loginUser(user.username, user.password, res)
};
exports.addFile = (req, res) => {
    console.log(req.body)
    // SET STORAGE
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.png')
        }
    })

    var upload = multer({ storage: storage }).single('file')

    upload(req, res, function (err) {

        if (err) {

            // ERROR occurred (here it can be occurred due
            // to uploading image of size greater than
            // 1MB or uploading different file type)
            res.send(err)
        }
        else {

            // SUCCESS, image successfully uploaded
            res.send("Success, Image uploaded!")
        }
    })
}



exports.getFile = (req, res) => {


    var jsonPath = path.join(__dirname, '..', '..', 'Capture.PNG');
    //var jsonString = fs.readFileSync(jsonPath);
    fileToLoad = fs.readFileSync(jsonPath);
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(fileToLoad, 'binary');
    //res.send(jsonString)
}

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const user = {

        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        groups: req.body.groups,
        role: req.body.role
    }
    createUser(user, res)
};

exports.findAll = (req, res) => {
    findAllUsers(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findUserById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateUser(id, req)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllUsers(res)
};