const router = require("express").Router(),
	auth = require("../middlewares/bearer"),
	updateUser = require("../actions/users/update-user"),
	findUser = require("../actions/users/find-user"),
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
