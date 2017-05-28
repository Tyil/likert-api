const user = require("../../../models").user,
	album = require("../../../models").album,
	favorite = require("../../../models").favorite_album;

module.exports = (userId, albumId) => {
	return user.findOne({
		where: {
			id: userId
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'The user could not be found.'
			};
		}
		return album.findOne({
			where: {
				id: albumId
			}
		}).then(result => {
			if (result === null) {
				return {
					ok: false,
					message: 'The album could not be found.'
				};
			}
			return favorite.create({
				userId: userId,
				albumId: albumId
			}).then(result => {
				return {
					ok: true,
					message: 'The album has been added to the favorites.'
				};
			});
		});
	});
};
