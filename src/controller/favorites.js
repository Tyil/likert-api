const router = require("express").Router(),
	findAll = require("../actions/favorites/all"),
	unauthError = require("../responses/unauthenticated.json");

module.exports = router
	.get('/', (req, res) => {
		if (!req.authenticated) {
			return res.json(unauthError);
		}
		findAll(req.token.id).then(result => {
			return res.json(result);
		});
	})

;
