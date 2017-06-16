const likert = require("../../models").likert_template;

module.exports = (id) => {
	return likert.findOne({
		where: {
			id: id
		}
	}).then(result => {
		if (result === null) {
			return {
				ok: false,
				message: 'The likert scale could not be found.'
			};
		}
		return result.update({
			deletedAt: Date.now()
		}, {
			where: {
				id: id,
			},
			returning: true
		}).then(value => {
			return {
				ok: true
			};
		});
	});
};
