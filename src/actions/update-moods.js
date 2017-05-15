const moods = require('../models').mood;

module.exports = (oldMood, newMood) => {
	return moods.findOne({
		where: {
			name: oldMood
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'The mood ' + oldMood + ' could not be found.'
			};
		}
		return result.update({
			Name: newMood
		}).then(result => {
			return {
				ok: true,
				message: 'The mood has been updated.'
			};
		}).catch(err => {
			return {
				ok: false,
				message: 'The mood could not be updated.'
			};
		});
	}).catch(err => {
		return {
			ok: false,
			message: err
		}
	});
}
