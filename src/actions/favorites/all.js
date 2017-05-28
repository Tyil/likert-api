const user = require("../../models").user,
	favo_album = require("../../models").favorite_album,
	favo_artist = require("../../models").favorite_artist,
	favo_genre = require("../../models").favorite_genre,
	favo_song = require("../../models").favorite_song;

module.exports = (userId) => {
	return user.findOne({
		where: {
			id: userId
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'The requested information could not be found'
			};
		}
		return favo_album.findAll({
			where: {
				userId: userId
			}
		}).then(album => {
			return favo_artist.findAll({
				where: {
					userId: userId
				}
			}).then(artist => {
				return favo_genre.findAll({
					where: {
						userId: userId
					}
				}).then(genre => {
					return favo_song.findAll({
						where: {
							userId: userId
						}
					}).then(song => {
						return {
							ok: true,
							message: album,
							artist,
							genre,
							song
						};
					});
				});
			});
		});
	});
};
