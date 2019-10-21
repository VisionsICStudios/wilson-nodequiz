/*
============================================
; Title: slideshow.js (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Model
;===========================================
*/

/* eslint-disable prefer-destructuring */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slideshowSchema = new Schema({

  slideId: { type: String },
  header: { type: String },
  caption: { type: String },
  slides: [{ img: { type: String }, tooltip: { type: String }, label: { type: String } }],

});

const Slideshow = mongoose.model('Slideshow', slideshowSchema);

// Export the Quiz model to make it available to other areas of the app.
module.exports = Slideshow;
