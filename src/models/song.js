const artist = require("./index").artist;

module.exports = function (sequelize, DataTypes) {
	const song = sequelize.define('song', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING
		},
		path: {
			type: DataTypes.STRING
		},
		tag: {
			type: DataTypes.STRING
		},
		artistId: {
			type: DataTypes.INTEGER,
		},
		albumId: {
			type: DataTypes.INTEGER
		},
		genreId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'genres',
				key: 'id'
			},
		},
		moodId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'moods',
				key: 'id'
			},
		}
	}, {
		timestamps: false
	});

	song.belongsTo(artist, { as: "artist" });

	return song;
};
