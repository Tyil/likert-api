const song = require("../../models").song,
	genre = require("../../models").genre,
	user = require("../../models").user,
	listened = require("../../models").previously_listened,
	songResult = require("../../models").likert_template_result,
	maxSongs = 10;

// var songs = [], temp = [], amountResults

module.exports = (genreId, moodId) => {
	var songs = [], temp = [], amountResults

	songResult.findall({
		attributes: ['scaleScore', [sequelize.fn('AVG', sequelize.col('scaleScore')), 'averageScore']],
		where: {
			moodId: moodId,
			genreId: genreId
		},
		group: { songId }
	}).then(result => {
		amountResults = result.length
		if (amountResults == 0) {
			return
		}
		if (amountResults > maxSongs / 2) {
			amountResults == maxSongs / 2
		}
		for (var i = 0; amountResults > i; i++) {
			var index = results.indexOf(Math.max.apply(null, results.averageScore))
			songs.push({ songId: results[index].songid, listened: "Y" })
			result.splice(index, 1)
		}
	})
	song.findall({
		where: {
			moodId: moodId,
			genreId: genreId
		}
	}).then(result => {
		for (var i = 0; result.length > i; i++) {
			var resSong = result[i].songId
			listened.findOne({
				where: {
					songId: resSong
				}
			}).then(result => {
				if (result.length == 0) {
					temp.push(resSong.songId)
				}
			});
		}
		var j = 0, tempNumber = maxSongs - songs.length
		for (var i = tempNumber; songs.length < i; i++) {
			songs.push({ songId: temp[j], listened: "N" })
			j++
		}
	});

	return songs





	// listenedMusic(genreId, moodId)
	// newMusic(genreId, moodId)
	// return songs;
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

// function newMusic(genreId, moodId) { //, artistId, albumId){
// 	song.findall({
// 		where: {
// 			moodId: moodId,
// 			genreId: genreId
// 		}
// 	}).then(result => {
// 		for (var i = 0; result.length > i; i++) {
// 			var resSong = result[i].songId
// 			listened.findOne({
// 				where: {
// 					songId: resSong
// 				}
// 			}).then(result => {
// 				if (result.length == 0) {
// 					temp.push(resSong.songId)
// 				}
// 			});
// 		}
// 		var j = 0, tempNumber = maxSongs - songs.length
// 		for (var i = tempNumber; songs.length < i; i++) {
// 			songs.push({ songId: temp[j], listened: "N" })
// 			j++
// 		}
// 	});
// };

// function listenedMusic(genreId, moodId) { //, artistId, albumId){
// 	songResult.findall({
// 		attributes: ['scaleScore', [sequelize.fn('AVG', sequelize.col('scaleScore')), 'averageScore']],
// 		where: {
// 			moodId: moodId,
// 			genreId: genreId
// 		},
// 		group: { songId }
// 	}).then(result => {
// 		amountResults = result.length
// 		if (amountResults == 0) {
// 			return
// 		}
// 		if (amountResults > maxSongs / 2) {
// 			amountResults == maxSongs / 2
// 		}
// 		for (var i = 0; amountResults > i; i++) {
// 			var index = results.indexOf(Math.max.apply(null, results.averageScore))
// 			songs.push({ songId: results[index].songid, listened: "Y" })
// 			result.splice(index, 1)
// 		}

// 	})
// }