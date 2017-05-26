const like_dislike = require("../../models").like_dislike_genre;

module.exports = (userId, genre, likeOrDislike) => {	
	return like_dislike.findOne({
		userId: userId,
		genreId: genre,
		like_dislike: likeOrDislike
	}).then(result => {
		result.destroy();
		return {
			ok: true,
			message: "Preference got removed."
		};
	}).catch(error => {
		return {
			ok: false,
			message: error
		};
	});
}
