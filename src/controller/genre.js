const router = require("express").Router();

const genre = require("../models").genre;
const like_dislike = require("../models").like_dislike_genre;
const token = require("../models").token;
// const addLikeDislike = require("../actions/add-like-dislike");

router
	.post("/:token/:genreName/:likeOrDislike", (req, res) => {
		let likeOrDislike = req.params.likeOrDislike,
			genreName = req.params.genreName,
			token = req.params.token;

		if (likeOrDislike != "like" &&
			likeOrDislike != "dislike") {
			return res.json({
				ok: false,
				message: "The user did not like or dislike, it is a different status."
			});
		}

		return genre.findOne({
			Name: genreName
		}).then(function (result) {
			if (result === null) {
				return res.json({
					ok: false,
					message: "The specific genre does not exist."
				});
			} else {
				like_dislike.create({
					user: token,
					like_dislike: likeOrDislike,
					genre_name: result.Name
				}).then(function (result) {
					if (result != null) {
						return res.json({
							ok: true,
							message: "Preference has been added."
						});
					} else {
						return res.json({
							ok: false,
							message: "Something has gone horribly wrong, we have lost scotty."
						});
					}
				});
			}
		});
	})
	.delete("/:token/:genreName", (req, res) => {
		console.log("Currently not working yet.");
	});
module.exports = router;
