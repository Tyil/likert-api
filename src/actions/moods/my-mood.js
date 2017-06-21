const mood = require('../../models').mood,
	current = require('../../models').current_mood;

module.exports = (userId) => {
	return current.findOne({
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
		return mood.findOne({
			where: {
				id: result.get('moodId')
			}
		}).then(mood => {
			return {
				ok: true,
				message: mood.get('name')
			}
		}).catch(err => {
			return {
				ok: false,
				message: err
			};
		});
	}).catch(err => {
		return {
			ok: false,
			message: err
		};
	});
};
