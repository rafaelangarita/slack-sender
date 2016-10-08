var express = require('express');
var slack = require('./routes/slack');
var logger = require('morgan');
var bodyParser = require('body-parser');
var conf = require('./conf/conf');

//var port = (process.env.PORT || 3000);
var port = (process.env.VCAP_APP_PORT || conf.nodeport);

var app = express();

app.use(logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
app.use(bodyParser.json());

console.log('registering slack routes with express');
app.post('/slack', slack.sendMessage);


console.log('About to start listening');
app.listen(port);
console.log('Listening on port: ', port);
