'use strict';

const entries = [
	{ id: 1, artistId: 1, name: "A Night at the Opera", },
	{ id: 2, artistId: 2, name: "Oceans - The String Quartet Tribute to Enya", },
	{ id: 3, artistId: 3, name: "Shepherd Moons", },
	{ id: 4, artistId: 3, name: "Watermark", },
	{ id: 5, artistId: 4, name: "'V' is for Vagina", },
	{ id: 6, artistId: 5, name: "Heroes are Hard to Find", },
	{ id: 7, artistId: 6, name: "Makara", },
	{ id: 8, artistId: 7, name: "Kaya", },
	{ id: 9, artistId: 8, name: "7 Seben", },
	{ id: 10, artistId: 9, name: "LOL (^^,)", },
	{ id: 11, artistId: 10, name: "Caravan Palace", }
];

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("albums", entries);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("albums");
	}
};
