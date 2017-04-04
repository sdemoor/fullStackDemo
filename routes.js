var requestHandler = require('./requestHandler.js');
var express = require('express');

module.exports = function(app, express) {
  app.post('addTeacher', requestHandler.addTeacher);
}

