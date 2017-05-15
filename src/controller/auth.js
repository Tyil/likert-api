const router = require("express").Router();
const bcrypt = require("bcrypt-nodejs");
const randomstring = require("randomstring");

const registerAccount = require("../actions/register-account");
const login = require("../actions/login");
const refreshToken = require("../actions/refresh-token");

module.exports = router
	.post("/register", (req, res) => {
		registerAccount(req.body.username, req.body.password).then (response => {
			res.json(response);
		});
	})
	.post("/login", (req, res) => {
		login(req.body.username, req.body.password).then (response => {
			res.json(response);
		});
	})
	.post("/refresh", (req, res) => {
		if (!req.authenticated) {
			return res.json({
				ok: false,
				message: "You must be authenticated"
			});
		}

		refreshToken(req.token.id).then(response => {
			res.json(response);
		});
	})
	.post("/logout", (req, res) => {
		if (!req.authenticated) {
			return res.json({
				ok: false,
				message: "You are not logged in"
			});
		}

		destroyToken(req.token.id).then(response => {
			res.json(response);
		});
	})
;
