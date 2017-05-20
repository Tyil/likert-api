const likert = require("../../models").likert_template,
	likert_result = require("../../models").likert_template_result,
	likert_value = require(".././models").likert_template_value,
	likert_steps = require("../../models").likert_template_steps;

module.exports = (name, description, max_value, scaleItems) => {
	var response = {
		ok: false,
		message: 'I have encountered the following error: '
	};
	return likert.create({
		name: name,
		description: description,
		max_value: max_value
	}).then(x => {
		return likert_value.create({
			value: JSON.stringify(scaleItems)
		}).then(y => {
			response.ok = true;
			response.message = 'The likert scale has been created.';
			return response;
		});
	}).catch(err => {
		response.message += err;
		return response;
	});
};
