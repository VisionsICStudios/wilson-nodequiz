/*
============================================
; Title:  employee.js (Week 4)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 10 October 2019
; Description: MEAN NodeQuiz Model.
;===========================================
*/

const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

  employeeId: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  avatar: { type: String },

}, { collection: 'employees' });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
