const genre = require("../models").genre;
const like_dislike = require("../models").like_dislike_genre;
const token = require("../models").token;

module.exports = (token, genreName, likeOrDislike) => {
	if (likeOrDislike != "like" &&
		likeOrDislike != "dislike") {
		return {
			ok: false,
			message: "The user did not like or dislike, it is a different status."
		};
	}

	return genre.findOne({
		Name: genreName
	}).then(function (result) {
		if (result === null) {
			return {
				ok: false,
				message: "The specific genre does not exist."
			};
		} else {
			like_dislike.create({
				user: token,
				like_dislike: likeOrDislike,
				genre_name: result.Name
			}).then(function (result) {
				if (result != null) {
					return {
						ok: true,
						message: "Preference has been added."
					};
				} else {
					return {
						ok: false,
						message: "Something has gone horribly wrong, we have lost scotty."
					};
				}
			});
		}
	});
}
