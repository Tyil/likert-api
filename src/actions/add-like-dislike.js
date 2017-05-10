const genre = require("../models").genre;
const like_dislike = require("../models").like_dislike_genre;
const userName = require("../models").user;

module.exports = (isAuthenticated, user, genreName, likeOrDislike) => {
	if (!isAuthenticated) {
		return res.json({
			ok: false,
			message: "Not logged in."
		});
	}

	if (likeOrDislike != "like" &&
		likeOrDislike != "dislike") {
		return res.json({
			ok: false,
			message: "The user did not like or dislike, it is a different status."
		});
	}

	return genre.findOne({
		Name: genreName
	}).then(result => {
		like_dislike.create({
			user: token,
			like_dislike: likeOrDislike,
			genre_name: result.Name
		}).then(result => {
			return res.json({
				ok: true,
				message: "Preference has been added."
			});
		});
	}).catch(error => {
		return res.json({
			ok: false,
			message: "The specific genre does not exist."
		});
	});
}
