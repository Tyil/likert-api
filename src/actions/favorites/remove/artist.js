const favorite = require("../../../models").favorite_artist;

module.exports = (userId, artistId) => {
	return favorite.findOne({
		where: {
			userId: userId,
			artistId: artistId
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
