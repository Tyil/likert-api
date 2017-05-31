const moods = require('../../models').mood;

module.exports = (moodName) => {
	return moods.findOne({
		where: {
			name: moodName
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
			message: result.get("name")
		};
	}).catch(err => {
		return {
			ok: false,
			message: err
		};
	});
};
