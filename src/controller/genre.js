const router = require("express").Router();
const addLikeDislike = require("../actions/add-like-dislike");
const removeLikeDislike = require("../actions/remove-like-dislike");

router
	.post("/like", (req, res) => {
		addLikeDislike(req.authenticated, req.token.userId, req.body.genreName, "like")
			.then(function (result) {
				return res.json(result);
			});
	})

	.post("/dislike", (req, res) => {
		addLikeDislike(req.authenticated, req.token.userId, req.body.genreName, "dislike")
			.then(function (result) {
				return res.json(result);
			});
	})

	.delete("/like", (req, res) => {
		removeLikeDislike(req.authenticated, req.token.userId, req.body.genreName, "like")
			.then(function (result) {
				return res.json(result);
			});
	})

	.delete("/dislike", (req, res) => {
		removeLikeDislike(req.authenticated, req.token.userId, req.body.genreName, "dislike")
			.then(function (result) {
				return res.json(result);
			});
	});

module.exports = router;
