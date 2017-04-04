var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./routes');

app.use( morgan('dev') );
app.use( parser.json() );
app.use('/', routes);






app.set('port', port);

server.listen(port);
console.log('listening on port ', port);





