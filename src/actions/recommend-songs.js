const song = require("../models").song,
	genre = require("../models").genre;

module.exports = (genreId) => {
	return genre.findOne({
		where: {
			GenreId: genreId
		}
	}).then(result => {
		if(result === null){
			return {
				ok: false,
				message: 'Genre could not be found.'
			};
		}
		return song.findAll({
			where: {
				Mood_MoodId: result.genreId
			}
		}).then(result => {
			return {
				ok: true,
				message: result
			}
		});
	});
};