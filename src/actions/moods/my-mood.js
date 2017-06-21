const current = require('../../models').current_mood;

module.exports = (userId) => {
	current.findOne({
		where: {
			userId: userId
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'The user has not set a mood yet'
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
