'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("artists", [
			{
				id: 1,
				name: "Queen"
			},
			{
				id: 2,
				name: "Vitamin String Quartet"
			},
			{
				id: 3,
				name: "Enya"
			},
			{
				id: 4,
				name: "Puscifer"
			},
			{
				id: 5,
				name: "Fleetwood Mac"
			},
			{
				id: 6,
				name: "E.S. Posthumus"
			},
			{
				id: 7,
				name: "Bob Marley"
			},
			{
				id: 8,
				name: "Dschinghis Khan"
			},
			{
				id: 9,
				name: "Basshunter"
			},
			{
				id: 10,
				name: "Caravan Palace"
			},
			{
				id: 11,
				name: "Marconi Union"
			}
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("artists");
	}
};
