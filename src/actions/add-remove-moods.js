const moods = require('../models').mood;

module.exports = (moodName, action) => {
	return moods.findOne({
		where: {
			name: moodName
		}
	}).then(result => {
		switch (action) {
			case 'add':
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
				});
			case 'remove':
				if (result === null) {
					return {
						ok: false,
						message: 'This mood does not exist.'
					};
				}
				result.destroy();
				return {
					ok: true,
					message: 'The mood has been removed.'
				};
			default:
				return {
					ok: false,
					message: 'The developer did not specify add or remove, instead it is an custom action.'
				};
		}
	}).catch(err => {
		return {
			ok: false,
			message: err
		};
	});
};