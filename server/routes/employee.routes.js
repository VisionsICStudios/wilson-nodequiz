/*
============================================
; Title:  employee.routes.js (Week 5)
; Author: Professor Krasso
; Modified By: Aaron Wilson
; Date: 20 October 2019
; Description: MEAN NodeQuiz Routes.
;===========================================
*/

/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-console */

const express = require('express');
const Employee = require('../models/employee');

const employeeRoute = express.Router();

// Employee CRUD Operations

// Create new Employee.
employeeRoute.post('/', function (req, res, next) {
  const employee = {
    employeeId: req.body.employeeId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  Employee.create(employee, function (err) {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(employee);
    return res.json(employee);
  });
});

// Read one employee by id.
employeeRoute.get('/:id', (req, res, next) => {
  Employee.findOne({ employeeId: req.params.id }, (err, employee) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(employee);
    return res.json(employee);
  });
});

// Read for all employees.
employeeRoute.get('/', (req, res, next) => {
  Employee.find({}, (err, employees) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(employees);
    return res.json(employees);
  });
});

// Export the employee route to make it available to other areas of the app.
module.exports = employeeRoute;
