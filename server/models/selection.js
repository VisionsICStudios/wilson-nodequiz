/*
============================================
; Title: selection.js (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Model
;===========================================
*/

/* eslint-disable prefer-destructuring */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const selectionSchema = new Schema({

  selectionId: { type: String },
  title: { type: String },
  caption: { type: String },
  img: { type: String },
  description: { type: String },
  label: { type: String },

}, { collection: 'selections' });

const Selection = mongoose.model('Selection', selectionSchema, 'selections');

// Export the Selection model to make it available to other areas of the app.
module.exports = Selection;
