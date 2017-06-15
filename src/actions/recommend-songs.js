const song = require("../models").song,
	genre = require("../models").genre,
	user = require("../models").user,
	likeGenre = require("../models").like_dislike_genre;

	var songs,temp = []

module.exports = (genreId) => {
	// return genre.findOne({
	// 	where: {
	// 		GenreId: genreId
	// 	}
	// }).then(result => {
	// 	if(result === null){
	// 		return {
	// 			ok: false,
	// 			message: 'Genre could not be found.'
	// 		};
	// 	}
	// 	return song.findAll({
	// 		where: {
	// 			Mood_MoodId: result.genreId
	// 		}
	// 	}).then(result => {
	// 		return {
	// 			ok: true,
	// 			message: result
	// 		}
	// 	});
	// });
};

function newMusic(genreId, moodId){ //, artistId, albumId){
	song.findall({
		where: {
			Mood_MoodId: result.genreId & result.moodId
		}
	}).then(result => {
		for(var i = 0; result.length > i; i++){
			//songResult.findOne({
				//where: {
				//	SongId: songId
				//}
			//}).then(result => {
			// 	if (result.length == 0){
			// 		temp.push(result.songId);
			// 	}
			//});
		}
		var j = 0;
		for(var i = 10; songs.length < i; i--){
			songs[i] = {songId: temp[j], listened: "no"};
			j++;
		}
	});
};