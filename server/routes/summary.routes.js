/*
============================================
; Title:  summary.routes.js (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Routes.
;===========================================
*/

/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-console */

const express = require('express');
const Summary = require('../models/summary');

const summaryRoute = express.Router();

// Summary CRUD operations

// Create a new summary.
summaryRoute.post('/api/summary', (req, res, next) => {
  const summary = new Summary();

  // Build out the object structure.
  summary.employeeId = req.body.employeeId;
  summary.firstname = req.body.firstname;
  summary.lastname = req.body.lastname;
  summary.title = req.body.title;
  summary.date = req.body.date;
  summary.quiz = req.body.quiz;
  summary.results = req.body.results;
  summary.total = req.body.total;

  summary.save((err) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    console.log(summary);
    res.json({ summary });
  });
});

// Read the summary.
summaryRoute.get('/api/summary', (req, res, next) => {
  Summary.find({}, (err, summary) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(summary);
    return res.json(summary);
  });
});

// Export the summary route to make it available to other areas of the summaryRoute.
module.exports = summaryRoute;
