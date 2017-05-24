const likert = require("../../models").likert_template;

module.exports = (id, updateItem) => {
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
			name: updateItem.name,
			description: updateItem.description,
			max_value: updateItem.max_value
		}, {
			where: {
				id: id,
			},
			returning: true
		}).then(value => {
			return {
				ok: true,
				message: 'The likert scale has been altered.'
			};
		});
	});
};
