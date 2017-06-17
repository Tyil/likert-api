const router = require("express").Router(),
	add = require('../actions/moods/add-moods'),
	remove = require('../actions/moods/remove-moods'),
	update = require('../actions/moods/update-moods'),
	specific = require('../actions/moods/specific-moods'),
	update_user_mood = require('../actions/moods/update-user-mood'),
	moods = require('../models').mood,
	current = require('../models').current_mood,
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
	.get('/my', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		current.findOne({
			where: {
				userId: req.token.userId
			}
		}).then(result => {
			return res.json(result);
		});
	})
	.post('/my', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		update_user_mood(req.body.moodId, req.token.userId).then(result => {
			return res.json(result);
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
