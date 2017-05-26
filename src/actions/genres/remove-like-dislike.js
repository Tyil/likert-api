const like_dislike = require("../../models").like_dislike_genre;

module.exports = (userId, genre, likeOrDislike) => {	
	return like_dislike.findOne({
		userId: userId,
		genreId: genre,
		like_dislike: likeOrDislike
	}).then(result => {
		result.destroy();
		return res.json({
			ok: true,
			message: "Preference got removed."
		});
	}).catch(error => {
		return res.json({
			ok: false,
			message: "Preference could not be found."
		});
	});
}
