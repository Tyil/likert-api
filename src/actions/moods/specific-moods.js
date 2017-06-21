const moods = require('../../models').mood;

module.exports = (moodId) => {
	return moods.findOne({
		where: {
			id: moodId
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
			message: result
		};
	}).catch(err => {
		return {
			ok: false,
			message: err
		};
	});
};
