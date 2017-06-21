const router = require("express").Router(),
	add = require('../actions/moods/add-moods'),
	remove = require('../actions/moods/remove-moods'),
	update = require('../actions/moods/update-moods'),
	specific = require('../actions/moods/specific-moods'),
	moods = require('../models').mood,
	my = require('../actions/moods/my-mood'),
	previous = require('../actions/moods/my-previous-moods'),
	update_user_mood = require('../actions/moods/update-user-mood'),
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
		my(req.token.userId).then(result => {
			return res.json(result);
		});
	})
	.get('/recent', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		previous(req.token.userId, 1).then(result => {
			return res.json(result);
		});
	})
	.get('/recent/:count', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		previous(req.token.userId, req.params.count).then(result => {
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
	.get('/:moodId', (req, res) => {
		specific(req.params.moodId).then(result => {
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
