const user = require("../../models").user,
	favo_album = require("../../models").favorite_album,
	favo_artist = require("../../models").favorite_artist,
	favo_genre = require("../../models").favorite_genre,
	favo_song = require("../../models").favorite_song;

module.exports = (userId) => {
	var response = {
		ok: false,
		message: ''
	}
	return user.findOne({
		where: {
			id: userId
		}
	}).then(result => {
		if (result === null) {
			response.message = 'The requested information could not be found';
			return response;
		}
		reponse.ok = true;
		favo_album.findAll({
			where: {
				userId: userId
			}
		}).then(result => {
			response.message += result;
		});
		favo_artist.findAll({
			where: {
				userId: userId
			}
		}).then(result => {
			response.message += result;
		});
		favo_genre.findAll({
			where: {
				userId: userId
			}
		}).then(result => {
			response.message += result;
		});
		favo_song.findAll({
			where: {
				userId: userId
			}
		}).then(result => {
			response.message += result;
		});
		return response;
	});
};
