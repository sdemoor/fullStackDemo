var db = require('./db.js');

exports.addTeacher = function(req, res) {
  db.Teachers.create({
    name: req.body.name,
    email: req.body.email
  }).then(function(teacher) {
    console.log('new teacher ', teacher);
  })
}