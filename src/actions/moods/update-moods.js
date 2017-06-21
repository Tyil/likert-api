const moods = require('../../models').mood;

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
			name: newMood
		}).then(result => {
			return {
				ok: true,
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
