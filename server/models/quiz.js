/*
============================================
; Title: quiz.js (Week 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 10 October 2019
; Description: MEAN NodeQuiz Model
;===========================================
*/

/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quizSchema = new Schema({

  quizId: { type: String },
  name: { type: String },
  questions: [
    {
      question: { type: Object },
      answers: [
        { answer: { type: String }, isCorrect: { type: Boolean } },
        { answer: { type: String }, isCorrect: { type: Boolean } },
        { answer: { type: String }, isCorrect: { type: Boolean } },
        { answer: { type: String }, isCorrect: { type: Boolean } },
      ],
    }],

}, { collection: 'quizzes' });

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
