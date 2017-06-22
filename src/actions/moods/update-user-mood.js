const mood = require('../../models').mood,
	current = require('../../models').current_mood,
	previous = require('../../models').previous_mood;

module.exports = (moodId, userId) => {
	return current.findOne({
		where: {
			userId: userId
		}
	}).then(result => {
		return mood.findOne({
			where: {
				id: moodId
			}
		}).then(moodResult => {
			if (moodResult === null) {
				return {
					ok: false,
					message: 'This mood does not exist.'
				}
			}
			if (result === null) {
				return current.create({
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
			return previous.create({
				moodId: moodId,
				userId: userId
			}).then(resp => {
				return current.update({
					moodId: moodId
				}, {
					where: {
						userId: userId
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
		}).catch(err => {
			return {
				ok: false,
				message: err
			}
		});
	});
}
