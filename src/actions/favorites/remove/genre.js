const favorite = require("../../../models").favorite_genre;

module.exports = (userId, genreId) => {
	return favorite.findOne({
		where: {
			userId: userId,
			genreId: genreId
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'The preference could not be found.'
			}
		}
		return result.destroy().then(result => {
			return {
				ok: true
			}
		});
	});
};
