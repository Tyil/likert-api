const user = require("../../../models").user,
	song = require("../../../models").song,
	favorite = require("../../../models").favorite_song;

module.exports = (userId, songId) => {
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
		return song.findOne({
			where: {
				id: songId
			}
		}).then(result => {
			if (result === null) {
				return {
					ok: false,
					message: 'The song could not be found.'
				};
			}
			return favorite.create({
				userId: userId,
				songId: songId
			}).then(result => {
				console.log(result);
				return {
					ok: true,
					message: 'The song has been added to the favorites.'
				};
			});
		});
	});
};
