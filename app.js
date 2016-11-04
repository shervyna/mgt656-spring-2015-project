'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers = require('./controllers/index.js');
var aboutControllers = require('./controllers/about.js');
var eventControllers = require('./controllers/events.js');
var docControllers = require('./controllers/documentation.js');

// Create our express app
var app = express();

// Configure it
configure(app);

// Add routes mapping URLs to controllers
app.get('/', indexControllers.index);
app.get('/about', aboutControllers.about);
app.get('/docreport1', aboutControllers.documentation1);
app.get('/events', eventControllers.listEvents);
app.get('/events/new', eventControllers.newEvent);
app.get('/api/events', eventControllers.api);
//app.post('/docreport1', docControllers.sprint);

app.post('/events/new', eventControllers.saveEvent);
app.get('/events/event.id', eventControllers.eventDetail);

module.exports = app;