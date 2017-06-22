const likert = require("../../models").likert_template,
	likert_result = require("../../models").likert_template_result,
	likert_steps = require("../../models").likert_template_steps,
	likert_value = require("../../models").likert_template_value;

module.exports = (id, user) => {
	var response = {
		ok: false,
		message: 'The requested information could not be found.'
	};
	return likert.findOne({
		where: {
			id: id,
			deletedAt: null
		}
	}).then(result => {
		if (result === null) {
			return response;
		}
		return likert_result.findAll({
			where: {
				userId: user
			}
		}).then(answers => {
			return likert_value.findOne({
				where: {
					templateId: result.id
				}
			}).then(scale => {
				response.ok = true;
				response.message = {
					likert: result,
					scale: scale.get("value").split(','),
					answers: answers
				};
				return response;
			});
		});
	});
};
