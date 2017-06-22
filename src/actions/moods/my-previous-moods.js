const previous_moods = require('../../models').previous_mood;

module.exports = (userId, limit) => {
	return previous_moods.findAll({
		where: {
			userId: userId
		},
		limit: limit
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'There is no history of moods for this user.'
			};
		}
		return {
			ok: true,
			message: result
		};
	}).catch(err => {
		return {
			ok: false,
			message: err
		};
	});
};
