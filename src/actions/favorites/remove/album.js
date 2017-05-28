const favorite = require("../../../models").favorite_album;

module.exports = (userId, albumId) => {
	return favorite.findOne({
		where: {
			userId: userId,
			albumId: albumId
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
				message: 'The album preference has been removed.'
			};
		});
	});
};
