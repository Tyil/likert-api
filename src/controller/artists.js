const router = require("express").Router();
const unauthenticatedError = require("../responses/unauthenticated.json");

const actions = {
	create: require("../actions/artists/create"),
	delete: require("../actions/artists/delete"),
	findAll: require("../actions/artists/find-all"),
	findOne: require("../actions/artists/find-one"),
	update: require("../actions/artists/update"),
};

module.exports = router
	.get("/", (req, res) => {
		actions.findAll().then(response => {
			res.json(response);
		});
	})
	.get("/:id", (req, res) => {
		actions.findOne(req.body.id).then(response => {
			res.json(response);
		});
	})
	.post("/add", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json(unauthenticatedError);
		}

		actions.create(req.body.name).then(response => {
			res.json(response);
		});
	})
	.delete("/:id", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json(unauthenticatedError);
		}

		actions.delete(req.body.id).then(response => {
			res.json(response);
		});
	})
	.put("/:id", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json(unauthenticatedError);
		}

		actions.update(req.body.id, req.body.name).then(response => {
			res.json(response);
		});
	})
	;
