const history = require("../../models").history_song;
const song = require("../../models").song;
const user = require("../../models").user;

module.exports = (userId, count) => {
	return history.findAll({
		include: [
			{ model: song, as: "song" },
			{ model: user, as: "user" },
		],
		where: {
			userId: userId
		},
		limit: count,
		order: [
			[ "createdAt", "DESC" ]
		]
	}).then(results => {
		return {
			ok: true,
			message: results
		};
	}).catch(err => {
		return {
			ok: false,
			message: err.message || err
		};
	});
};

