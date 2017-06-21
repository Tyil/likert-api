const song = require("./index").song;
const user = require("./index").user;

module.exports = (sequelize, DataTypes) => {
	const historySong = sequelize.define('history_song', {
		createdAt: DataTypes.DATE
	}, {
		timestamps: false
	});

	historySong.belongsTo(song, { as: "song" });
	historySong.belongsTo(user);

	return historySong;
};
