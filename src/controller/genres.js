const router = require("express").Router(),
	addLikeDislike = require("../actions/genres/add-like-dislike"),
	removeLikeDislike = require("../actions/genres/remove-like-dislike"),
	addGenre = require("../actions/genres/add-genre.js"),
	removeGenre = require("../actions/genres/remove-genre.js"),
	genre = require('../models').genre,
	notLoggedIn = require("../responses/unauthenticated.json");

module.exports = router
	.get("/", (req, res) => {
		genre.findAll().then(genres => {
			return res.json(genres);
		});
	})

	.get("/:genreName", (req, res) => {
		genre.findOne({
			where: {
				name: req.params.genreName
			}
		}).then(result => {
			if (result === null) {
				return res.json({
					ok: false,
					message: 'The mood could not be found.'
				});
			}
			return res.json({
				ok: true,
				message: result.get("name")
			});
		});
	})

	.post("/", (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		addGenre(req.body.genreName)
			.then(result => {
				return res.json(result);
			});
	})

	.delete("/", (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		removeGenre(req.body.genreName)
			.then(result => {
				return res.json(result);
			});
	})

	.post("/like", (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		addLikeDislike(req.token.userId, req.body.genreName, "like")
			.then(result => {
				return res.json(result);
			});
	})

	.post("/dislike", (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		addLikeDislike(req.token.userId, req.body.genreName, "dislike")
			.then(result => {
				return res.json(result);
			});
	})

	.delete("/like", (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		removeLikeDislike(req.token.userId, req.body.genreName, "like")
			.then(result => {
				return res.json(result);
			});
	})

	.delete("/dislike", (req, res) => {
		if (!req.authenticated) {
			return res.json(notLoggedIn);
		}
		removeLikeDislike(req.token.userId, req.body.genreName, "dislike")
			.then(result => {
				return res.json(result);
			});
	});
