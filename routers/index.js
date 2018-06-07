'use strict'

/*DEPENDENCIAS*/
const activitiesController = require('../controllers/activities');
const express = require('express');
const api = express.Router();
const nodemailer = require('nodemailer');

api.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api.post('/activities', activitiesController.saveActivities);
api.get('/activities', activitiesController.getActivities);
api.get('/activities/:user', activitiesController.getActivitiesUser);

module.exports = api
