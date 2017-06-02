const user = require("../../../models").user,
	genre = require("../../../models").genre,
	favorite = require("../../../models").favorite_genre;

module.exports = (userId, genreId) => {
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
		return genre.findOne({
			where: {
				id: genreId
			}
		}).then(result => {
			if (result === null) {
				return {
					ok: false,
					message: 'The genre could not be found.'
				};
			}

			return favorite.create({
				userId: userId,
				genreId: genreId
			}).then(result => {
				return {
					ok: true
				};
			});
		});
	});
};
