const history = require("../../models").history_song;

module.exports = (userId, count) => {
	return history.findAll({
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

