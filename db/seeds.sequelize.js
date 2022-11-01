exports.userSeed = [{
    name: "John Doe",
    birthday: "1/1/1999",
    password: "admin",
    email: "admin@gmail.com",
    telephone: "765876",
    address: "N/A",
    role: "Admnistrator",
    username: "admin"
}, {
    name: "Mike Dean",
    birthday: "1/1/1999",
    password: "mike",
    email: "mike.dean@gmail.com",
    telephone: "658765876",
    address: "N/A",
    role: "Admnistrator",
    username: "mike.dean"
}, {
    name: "Tony Stark",
    birthday: "1/1/1999",
    password: "tony",
    email: "tony.stark@gmail.com",
    telephone: "658765876",
    address: "N/A",
    role: "Admnistrator",
    username: "tony.stark"
}]

exports.projectSeed = {


    "title": 'aa',
    "description": 'aa',
    "starting_date": 'aa',
    "ending_date": 'aa',
    "users": 'aa',
    "client": 'aa',
    "status": "ended"

}

const fs = require('fs');

exports.getSytemSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getEmailSettings = () => {
    var rawdata = fs.readFileSync('db/settings/system.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getEmailTemplateSettings = () => {
    var rawdata = fs.readFileSync('db/settings/email_template.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}


exports.getEmailSettings = () => {
    var rawdata = fs.readFileSync('db/settings/email.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getFooterSettings = () => {
    var rawdata = fs.readFileSync('db/settings/footer.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getHeaderSettings = () => {
    var rawdata = fs.readFileSync('db/settings/header.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getLocalisationSettings = () => {
    var rawdata = fs.readFileSync('db/settings/localisation.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getNotificationSettings = () => {
    var rawdata = fs.readFileSync('db/settings/notification.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}

exports.getDashboardSettings = () => {
    var rawdata = fs.readFileSync('db/settings/dashboard.json');
    var student = JSON.parse(rawdata);
    console.log(student);
    return student
}