const router = require("express").Router(),
	addLikeDislike = require("../actions/add-like-dislike"),
	removeLikeDislike = require("../actions/remove-like-dislike"),
	addGenre = require("../actions/add-genre.js"),
	removeGenre = require("../actions/remove-genre.js"),
	genre = require("../models").genre;

router
	.get("/", (req, res) => {
		genre.findAll().then(genres => {
			return res.json(genres);
		});
	})

	.post("/add", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json({
				ok: false,
				message: "Not logged in."
			});
		}
		addGenre(req.body.genreName)
			.then(result => {
				return res.json(result);
			});
	})

	.delete("/remove", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json({
				ok: false,
				message: "Not logged in."
			});
		}
		removeGenre(req.body.genreName)
			.then(result => {
				return res.json(result);
			});
	})

	.post("/like", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json({
				ok: false,
				message: "Not logged in."
			});
		}
		addLikeDislike(req.token.userId, req.body.genreName, "like")
			.then(result => {
				return res.json(result);
			});
	})

	.post("/dislike", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json({
				ok: false,
				message: "Not logged in."
			});
		}
		addLikeDislike(req.token.userId, req.body.genreName, "dislike")
			.then(result => {
				return res.json(result);
			});
	})

	.delete("/like", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json({
				ok: false,
				message: "Not logged in."
			});
		}
		removeLikeDislike(req.token.userId, req.body.genreName, "like")
			.then(result => {
				return res.json(result);
			});
	})

	.delete("/dislike", (req, res) => {
		if (!req.authenticated && process.env.NODE_ENV != 'test') {
			return res.json({
				ok: false,
				message: "Not logged in."
			});
		}
		removeLikeDislike(req.token.userId, req.body.genreName, "dislike")
			.then(result => {
				return res.json(result);
			});
	});

module.exports = router;
