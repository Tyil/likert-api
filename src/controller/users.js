const router = require("express").Router(),
	auth = require("../middlewares/bearer"),
	updateUser = require("../actions/users/update-user"),
	findUser = require("../actions/users/find-user"),
	my = require('../actions/moods/my-mood'),
	previous = require('../actions/moods/my-previous-moods'),
	update_user_mood = require('../actions/moods/update-user-mood'),
	notLoggedIn = require("../responses/unauthenticated.json");

module.exports = router
	.get('/', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		findUser(req.token.userId).then(result => {
			return res.json(result);
		});
	})
	.get('/my/mood', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		my(req.token.userId).then(result => {
			return res.json(result);
		});
	})
	.get('/my/mood/previously', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		previous(req.token.userId).then(result => {
			return res.json(result);
		});
	})
	.post('/my/mood', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		update_user_mood(req.body.moodId, req.token.userId).then(result => {
			return res.json(result);
		});
	})
	.get('/:user', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		findUser(req.params.user).then(result => {
			return res.json(result);
		});
	})
	.put('/', auth, (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		updateUser(req.token.userId, req.body.username, req.body.password).then(result => {
			return res.json(result);
		});
	})
	.put('/:id', (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		updateUser(req.params.id, req.body.username, req.body.password).then(result => {
			return res.json(result);
		});
	});
