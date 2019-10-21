/*
============================================
; Title:  slideshow.routes.js (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Routes.
;===========================================
*/

/* eslint-disable consistent-return */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-console */

const express = require('express');
const Slideshow = require('../models/slideshow');

const slideshowRoute = express.Router();

// Slideshow CRUD operations.

// Create A slideshow.
slideshowRoute.post('/api/slideshows', (req, res, next) => {
  const slideshow = new Slideshow();

  // Build out the object structure.
  slideshow.slideId = req.body.slideId;
  slideshow.header = req.body.header;
  slideshow.caption = req.body.caption;
  slideshow.slides = req.body.slides;

  slideshow.save((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return res.json({ message: 'A Slideshow has been created :-) ' });
  });
});

// Read All slideshows
slideshowRoute.get('/api/slideshows', (res, next) => {
  Slideshow.find({}, (err, slideshow) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return res.json(slideshow);
  });
});

// Read one slideshow.
slideshowRoute.get('/api/slideshows/:id', (req, res, next) => {
  Slideshow.findOne({ id: req.params.id }, (err, slideshow) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return res.json(slideshow);
  });
});

// Export the slideshow route to make it available to other areas of the app.
module.exports = slideshowRoute;
