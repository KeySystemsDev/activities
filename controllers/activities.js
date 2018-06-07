'use strict'

const Activities = require('../models/activities');
const nodemailer = require('nodemailer');
const pdfcrowd = require("pdfcrowd");

function saveActivities(req,res){

	let activities = new Activities();

	activities.user = req.body.user;
	activities.date = Date.now();
	activities.to = req.body.to;
	activities.cc = req.body.cc;
	activities.bcc = req.body.bcc;
	activities.activity = req.body.activity;
	activities.expiration = req.body.expiration;

	activities.save((err, activitiesStored)=>{
		if (err) res.status(500).send({Mensaje:`Error al salvar los datos: ${err} `})

		res.status(200).send({activities: activitiesStored});
	});
}

function getActivities(req,res) {

	Activities.find({}, (err, activities)=>{
		if(err) return res.status(500).send({mensaje: `Error al realizar la consulta: ${err}`});
		if(!activities) return res.status(404).send({mensaje: "No Existen Actividades"});

		res.send(200,{activities});
	})
}

function getActivitiesUser(req,res) {

	let user = req.params.user;

	Activities.find({ user : { $all : [user] }}, (err, activities)=>{
		if(err) return res.status(500).send({mensaje: `Error al realizar la consulta: ${err}`});
		if(!activities) return res.status(404).send({mensaje: "No Existen actividades creadas para usted"});
        
		res.status(200).send({activities});
	})
}

module.exports = {
	saveActivities,
	getActivities,
	getActivitiesUser
}