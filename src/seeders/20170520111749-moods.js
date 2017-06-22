'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert("moods", [
			{
				id: 1,
				name: "Angry"
			},
			{
				id: 2,
				name: "Bored"
			},
			{
				id: 3,
				name: "Depressed"
			},
			{
				id: 4,
				name: "Happy"
			},
			{
				id: 5,
				name: "Hyper"
			},			
			{
				id: 6,
				name: "Peaceful"
			},
			{
				id: 7,
				name: "Sad"
			},
			{
				id: 8,
				name: "Shocked"
			},
			{
				id: 9,
				name: "Sick"
			},
			{
				id: 10,
				name: "Tired"
			}
		]);
	},

	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete("moods");
	}
};
