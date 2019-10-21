/*
============================================
; Title:  selection.routes.js (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Routes.
;===========================================
*/

/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-console */

const express = require('express');
const Selection = require('../models/selection');

const selectionRoute = express.Router();

// Selection CRUD Operations

// Create a new selection.
selectionRoute.post('/api/selections', (req, res, next) => {
  const selection = new Selection();

  // Build out the object structure.
  selection.selectionId = req.body.selectionId;
  selection.title = req.body.title;
  selection.caption = req.body.caption;
  selection.img = req.body.img;
  selection.description = req.body.description;
  selection.label = req.body.label;

  selection.save((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return res.json({ message: 'Congratulations the selection page was created :-)' });
  });
});

// Read all quizboard selections.
selectionRoute.get('/api/selections', (req, res, next) => {
  Selection.find({}, (err, selections) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(selections);
    return res.json(selections);
  });
});

// Export the selection route to make it available to other areas of the app.
module.exports = selectionRoute;
