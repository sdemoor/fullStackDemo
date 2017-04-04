//use sequelize to create and define tables ORM

var sequelize = require('sequelize');

var db = new sequelize('test', 'root', '');

var Teachers = db.define('Teachers', {
  name: sequelize.STRING,
  email: sequelize.STRING
});

var Subjects = db.define('Subjects', {
  subjectName: sequelize.STRING
});

Subjects.belongsTo(Teachers);
Teachers.hasMany(Subjects);

Teachers.sync();
Subjects.sync();

exports.Teachers = Teachers;
exports.Subjects = Subjects;



