const current = require('../../models').current_mood,
	previous = require('../../models').previous_mood;

module.exports = (moodId, userId) => {
	current.findOne({
		where: {
			userId: userId
		}
	}).then(result => {
		if (result === null) {
			current.create({
				moodId: moodId,
				userId: userId
			}).then(resp => {
				return {
					ok: true
				}
			}).catch(err => {
				return {
					ok: false,
					message: err
				}
			});
		}
		previous.create({
			moodId: moodId,
			userId: userId
		}).then(resp => {
			current.update({
				moodId: moodId
			}, {
				where: {
					userId: userId,
					moodId: result.get('moodId')
				}
			}).then(resp => {
				return {
					ok: true
				}
			}).catch(err => {
				return {
					ok: false,
					message: err
				}
			});
		}).catch(err => {
			return {
				ok: false,
				message: err
			}
		});
	});
}
