const router = require("express").Router();
const bcrypt = require("bcrypt-nodejs");
const randomstring = require("randomstring");

const registerAccount = require("../actions/auth/register-account");
const login = require("../actions/auth/login");
const refreshToken = require("../actions/auth/refresh-token");
const unauthError = require("../responses/unauthenticated.json");

module.exports = router
	.post("/register", (req, res) => {
		registerAccount(req.body.username, req.body.password).then(response => {
			if (response.ok = false) {
				res.json(response);
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
