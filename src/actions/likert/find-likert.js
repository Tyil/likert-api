const likert = require("../../models").likert_template,
	likert_result = require("../../models").likert_template_result,
	likert_steps = require("../../models").likert_template_steps;

module.exports = (id, user) => {
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
		return likert_result.findAll({
			where: {
				userId: user,
				templateId: result.id
			}
		}).then(answers => {
			return {
				ok: true,
				message: {
					id: result.id,
					name: result.name,
					max_value: result.max_value,
					description: result.description,
					createdAt: result.createdAt,
					updatedAt: result.updatedAt,
					answers
				}
			};
		});
	});
};
