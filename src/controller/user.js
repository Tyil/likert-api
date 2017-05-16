const router = require("express").Router(),
	updateUser = require("../actions/update-user"),
	findUser = require("../actions/find-user");

module.exports = router
	.get('/', (req, res) => {
		findUser(req.authenticated, req.token.id).then(result => {
			return res.json(result);
		});
	})
	.get('/:user', (req, res) => {
		findUser(req.authenticated, req.params.user).then(result => {
			return res.json(result);
		});
	})
	.post('/update', (req, res) => {
		updateUser(req.authenticated, req.token.id, req.body.username, req.body.password).then(result => {
			return res.json(result);
		});
	})
	.post('/update/:id', (req, res) => {
		updateUser(req.authenticated, req.params.id, req.body.username, req.body.password).then(result => {
			return res.json(result);
		});
	})
	;