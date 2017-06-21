const history = require("../../models").history_song;

module.exports = (userId, songId) => {
	history.create({
		userId: userId,
		songId: songId,
		createdAt: new Date().toISOString()
	});
};

