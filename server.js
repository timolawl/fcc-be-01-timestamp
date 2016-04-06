'use strict';

var express = require('express'),
    favicon = require('serve-favicon'),
    routes = require('./app/routes/index.js');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

routes(app);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


