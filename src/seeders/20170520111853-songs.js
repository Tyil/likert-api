'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('songs', [
			{
				name: "Death on Two Legs",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/01-Queen-Death On two Legs.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "Lazing on a Sunday Afternoon",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/02-Queen-Lazing On A Sunday Afternoon.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "I'm In Love With My Car",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/03-I'm In Love With My Car.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "You're my Best Friend",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/04-Queen-You'e My Best Friend.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "'39",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/05-Queen-'39.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "Sweet Lady",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/06-Queen-Sweet Lady.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "Seaside Rendezvous",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/07-Queen-Seaside Rendezvous.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "The Prophet's Song",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/08-Queen-The Prophet's Song.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "Love Of my Life",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/09-Queen-Love Of My Life.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "Good Cmopany",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/10-Queen-Good Company.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "Bohemian Rhapsody",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/11-Queen-Bohemian Rhapsody.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			},
			{
				name: "God Save The Queen",
				path: "/Queen - A Night At The Opera - MFSL GOLD UDCD 568/12-Queen-God Save The Queen.mp3",
				tag: "Vis",
				artistId: 1,
				albumId: 1,
				genreId: 1,
				moodId: 1
			}
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("songs");
	}
};
