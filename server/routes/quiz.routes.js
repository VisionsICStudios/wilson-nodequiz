/*
============================================
; Title:  quiz.routes.js (Week 5)
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
const Quiz = require('../models/quiz');

const quizRoute = express.Router();

// Quiz CRUD Operations

// Create a new quiz.
quizRoute.post('/api/quizzes', (req, res, next) => {
  const quiz = new Quiz();

  // Build out the object structure.
  quiz.quizId = req.body.quizId;
  quiz.name = req.body.name;
  quiz.questions = req.body.questions;
  quiz.question = req.body.question;
  quiz.answers = req.body.answers;

  quiz.save((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return res.json({ quiz });
  });
});

// Read all quizzes.
quizRoute.get('/api/quizzes', (req, res, next) => {
  Quiz.find({}, (err, quiz) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return res.json(quiz);
  });
});

// Read one quiz by id.
quizRoute.get('/api/quizzes/:id', (req, res, next) => {
  Quiz.findOne({ id: req.params.id }, (err, quiz) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return res.json(quiz);
  });
});

// Export the quiz route to make it available to other areas of the app.
module.exports = quizRoute;
