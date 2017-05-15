const genre = require("../models").genre;
const like_dislike = require("../models").like_dislike_genre;
const userName = require("../models").user;

module.exports = (user, genreName, likeOrDislike) => {
	if (likeOrDislike != "like" &&
		likeOrDislike != "dislike") {
		return res.json({
			ok: false,
			message: "The programmer did not like or dislike, it is a different status."
		});
	}

	genre.findOne({
		name: genreName
	}).then(result => {
		like_dislike.create({
			userId: user,
			genreId: result.id,
			like_dislike: likeOrDislike
		}).then(result => {
			return res.json({
				ok: true,
				message: "Preference has been added."
			});
		}).catch(error => {
			return res.json({
				ok: false,
				message: "The result could not be added to the table."
			});
		});
	}).catch(error => {
		return res.json({
			ok: false,
			message: "The specific genre does not exist."
		});
	});
}
