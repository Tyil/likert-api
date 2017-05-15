const moods = require('../models').mood;

module.exports = (moodName) => {
	return moods.findOne({
		where: {
			Name: moodName
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'This mood does not exist.'
			};
		}
		return {
			ok: true,
			message: result.Name
		};
	}).catch(err => {
		return {
			ok: false,
			message: 'Something went wrong.'
		};
	});
};
