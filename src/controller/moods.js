const router = require("express").Router(),
	add = require('../actions/moods/add-moods'),
	remove = require('../actions/moods/remove-moods'),
	update = require('../actions/moods/update-moods'),
	specific = require('../actions/moods/specific-moods'),
	moods = require('../models').mood,
	notLoggedIn = require("../responses/unauthenticated.json");

module.exports = router
	.get('/', (req, res) => {
		moods.findAll().then(result => {
			return res.json({
				ok: true,
				message: result
			});
		});
	})
	.get('/:mood', (req, res) => {
		specific(req.params.mood).then(result => {
			return res.json(result);
		});
	})
	.post('/', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		add(req.body.mood).then(result => {
			return res.json(result);
		});
	})
	.put('/', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		update(req.body.oldMood, req.body.newMood).then(result => {
			return res.json(result);
		});
	})
	.delete('/', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		remove(req.body.mood).then(result => {
			return res.json(result);
		});
	});
