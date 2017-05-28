const user = require("../../../models").user,
	artist = require("../../../models").artist,
	favorite = require("../../../models").favorite_artist;

module.exports = (userId, artistId) => {
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
		return artist.findOne({
			where: {
				id: artistId
			}
		}).then(result => {
			if (result === null) {
				return {
					ok: false,
					message: 'The artist could not be found.'
				};
			}
			return favorite.create({
				userId: userId,
				artistId: artistId
			}).then(result => {
				return {
					ok: true,
					message: 'The artist has been added to the favorites.'
				};
			});
		});
	});
};
