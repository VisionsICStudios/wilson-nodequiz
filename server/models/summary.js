/*
============================================
; Title:  summary.js (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Model.
;===========================================
*/

/* eslint-disable object-curly-newline */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */

const Schema = mongoose.Schema;

const mongoose = require('mongoose');

const summarySchema = new Schema({

  employeeId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  title: { type: String },
  date: { type: String },
  quiz: { type: String },
  results: [{ question: { type: String }, answer: { type: String }, isCorrect: { type: Boolean } }],
  total: { type: Number },

}, { collection: 'summaries' });

const Summary = mongoose.model('Summary', summarySchema, 'summaries');

// Export the Summary model to make it available to other areas of the app.
module.exports = Summary;
