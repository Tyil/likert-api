const router = require("express").Router();
const Artist = require("../models").artist;
const unauthenticatedError = require("../responses/unauthenticated.json");

module.exports = router
	.get("/", (req, res) => {
		Artist.findAll().then(artists => {
			return res.json(artists);
		});
	})
	.get("/:id", (req, res) => {
		return Artist.findOne({
			where: {
				id: req.body.id
			}
		}).then(result => {
			if (result === null) {
				return res.json({
					ok: false,
					message: "This artist does not exist."
				});
			}

			return res.json({
				ok: true,
				artist: {
					id: result.get("id"),
					name: result.get("name")
				}
			});
		});
	})
	.post("/add", (req, res) => {
		Artist.findOne({
			where: {
				name: req.body.name,
			}
		}).then(result => {
			if (!req.authenticated && process.env.NODE_ENV != 'test') {
				return res.json(unauthenticatedError);
			}

			if (result !== null) {
				return res.json({
					ok: false,
					message: "This artist already exists."
				});
			}

			Artist.create({
				name: req.body.name,
			}).then(result => {
				return res.json({
					ok: true,
					message: "This artist has been added.",
					id: result.get("id")
				});
			});
		});
	})
	.delete("/:id", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json(unauthenticatedError);
		}

		return Artist.findOne({
			where: {
				name: req.body.id
			}
		})
		.then(result => {
			if (result === null) {
				return res.json({
					ok: false,
					message: "This artist does not exist."
				});
			}

			result.destroy();

			return res.json({
				ok: true,
				message: "This artist has been removed."
			});
		});
	})
	.put("/:id", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json(unauthenticatedError);
		}

		return Artist.findOne({
			where: {
				id: req.body.id
			}
		}).then(result => {
			if (result === null) {
				return res.json({
					ok: false,
					message: "This artist does not exist."
				});
			}

			return result.update({
				name: req.body.name
			}).then(result => {
				return res.json({
					ok: true,
					message: "This artist has been updated."
				});
			}).catch(err => {
				return res.json({
					ok: false,
					message: err.message || err
				});
			});
		});
	})
	;
