const likert = require("../../models").likert_template,
	likert_value = require("../../models").likert_template_value;

module.exports = (id, name, description, scaleItems) => {
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
		let len = scaleItems.split(',').length;
		return result.update({
			name: name,
			description: description,
			max_value: len
		}, {
			where: {
				id: id,
			},
			returning: true
		}).then(update => {
			likert_value.update({
				value: scaleItems
			}, {
				where: {
					templateId: id
				}
			}).then(value => {
				return {
					ok: true
				};
			});
		});
	});
};
