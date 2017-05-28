const favorite = require("../../../models").favorite_song;

module.exports = (userId, songId) => {
	return favorite.findOne({
		where: {
			userId: userId,
			songId: songId
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
				ok: true,
				message: 'The song preference has been removed.'
			}
		});
	});
};
