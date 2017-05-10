const like_dislike = require("../models").like_dislike_genre;

module.exports = (isAuthenticated, userId, genre, likeOrDislike) => {
	if (!isAuthenticated) {
		return res.json({
			ok: false,
			message: "Not logged in."
		});
	}
    
	like_dislike.findOne({
		user: userId,
		genre_name: genre,
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
