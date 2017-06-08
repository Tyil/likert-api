const router = require("express").Router(),
	bcrypt = require("bcrypt-nodejs"),
	randomstring = require("randomstring"),
	registerAccount = require("../actions/auth/register-account"),
	login = require("../actions/auth/login"),
	refreshToken = require("../actions/auth/refresh-token"),
	destroyToken = require("../actions/auth/destroy-token"),
	unauthError = require("../responses/unauthenticated.json");

module.exports = router
	.post("/register", (req, res) => {
		registerAccount(req.body.username, req.body.password).then(response => {
			if (!response.ok) {
				return res.json(response);
			}
			login(req.body.username, req.body.password).then(token => {
				res.json(token);
			});
		});
	})
	.post("/login", (req, res) => {
		login(req.body.username, req.body.password).then(response => {
			res.json(response);
		});
	})
	.post("/refresh", (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}

		refreshToken(req.token.id).then(response => {
			res.json(response);
		});
	})
	.post("/logout", (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}

		destroyToken(req.token.id).then(response => {
			res.json(response);
		});
	});
