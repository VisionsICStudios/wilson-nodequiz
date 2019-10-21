/*
============================================
; Title:  app.js (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Model.
;===========================================
*/

/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
// eslint-disable-next-line global-require

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const employeeRoute = require('./routes/employee.routes');
const quizRoute = require('./routes/quiz.routes');
const summaryRoute = require('./routes/summary.routes').default;
const slideshowRoute = require('./routes/summary.routes').default;
const selectionRoute = require('./routes/summary.routes').default;
const config = require('./config/db-config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

// My routes
app.use('api/employees', employeeRoute);
app.use('api/quizzes', quizRoute);
app.use('api/summary', summaryRoute);
app.use('api/slideshow', slideshowRoute);
app.use('api/selection', selectionRoute);

/** *********************** Mongoose connection strings go below this line  ************** */

// MongoDB / Atlas connection.
mongoose.connect(`${config.database.prefix}${config.database.username}${config.database.password}${config.database.url}${config.database.name}${config.database.params}`,
{ promiseLibrary: bluebird, useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.debug('Connection to the MongoDB instance was successful'))
.catch(err => console.debug(`MongoDB Error: ${err.message}`));

/** *********************** API routes go below this line ******************* */

// Creates an express server and listens on port 3000
http.createServer(app).listen(config.web.port, () => {
  console.log(`Application started and listening on port  ${config.web.port} !`);
});
