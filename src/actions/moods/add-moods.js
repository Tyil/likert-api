const moods = require('../../models').mood;

module.exports = (moodName) => {
	return moods.findOne({
		where: {
			name: moodName
		}
	}).then(result => {
		if (result !== null) {
			return {
				ok: false,
				message: 'This mood already exists.'
			};
		}
		return moods.create({
			name: moodName
		}).then(result => {
			return {
				ok: true,
				message: 'The mood has been added.'
			};
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
