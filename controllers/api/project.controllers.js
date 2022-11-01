const { searchProject, findAllNumber, findInProgressProjects, findToDo, findInProgress, findDone, findBlocked, findProjectByStatus, filterProject, copyProject, findProjectById, updateProject, deleteProjectById, deleteAllProjects, findAllProjects, createProject } = require("../../services/project.services");

exports.findProjectByStatus = (req, res) => {


    findProjectByStatus(req, res)

}





exports.filterProject = (req, res) => {
    const initialState = {
        status: req.body.status,
        starting_date: req.body.starting_date,
        ending_date: req.body.ending_date
    }
    console.log(initialState)
    filterProject(res, initialState)
};

exports.searchProject = (req, res) => {
    const title = req.params.title;
    searchProject(res, title)
};


exports.copyProject = (req, res) => {
    const id = req.params.id;
    copyProject(id, res)
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

    const project = {
        title: req.body.title,
        description: req.body.description,
        starting_date: req.body.starting_date,
        ending_date: req.body.ending_date,
        users: req.body.users,
        client: req.body.client,
        status: req.body.status
    }

    createProject(project, res)
};

exports.findAll = (req, res) => {

    findAllProjects(res)
};

exports.findTop = (req, res) => {

    findInProgressProjects(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findProjectById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateProject(id, req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteProjectById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllProjects(req, res)
};

exports.findAllNumber = (req, res) => {
    findAllNumber(res)
};
exports.findToDo = (req, res) => {
    findToDo(res)
};
exports.findInProgress = (req, res) => {
    findInProgress(res)
};
exports.findDone = (req, res) => {
    findDone(res)
};

exports.findBlocked = (req, res) => {
    findBlocked(res)
};