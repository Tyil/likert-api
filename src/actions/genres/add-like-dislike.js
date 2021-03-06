const genre = require("../../models").genre;
const like_dislike = require("../../models").like_dislike_genre;
const userName = require("../../models").user;

module.exports = (user, genreName, likeOrDislike) => {
	if (likeOrDislike != "like" &&
		likeOrDislike != "dislike") {
		return {
			ok: false,
			message: "The programmer did not like or dislike, it is a different status."
		};
	}

	return genre.findOne({
		name: genreName
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'Genre does not exist.'
			};
		}

		return like_dislike.create({
			userId: user,
			genreId: result.id,
			like_dislike: likeOrDislike
		}).then(result => {
			return {
				ok: true,
				message: "Preference has been added."
			};
		}).catch(error => {
			return {
				ok: false,
				message: "The result could not be added to the table."
			};
		});
	}).catch(error => {
		return {
			ok: false,
			message: error
		};
	});
};
