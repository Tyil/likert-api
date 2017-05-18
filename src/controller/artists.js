const router = require("express").Router();
const Artist = require("../models").artist;

module.exports = router
	.get("/", (req, res) => {
		Artist.findAll().then(artists => {
			return res.json(artists);
		});
	})
	;
